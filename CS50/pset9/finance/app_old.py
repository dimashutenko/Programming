import os

from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from tempfile import mkdtemp
from werkzeug.security import check_password_hash, generate_password_hash

from helpers import apology, login_required, lookup, usd

# Configure application
app = Flask(__name__)

# Custom filter
app.jinja_env.filters["usd"] = usd

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///finance.db")


@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response


@app.route("/")
@login_required
def index():
    """Show portfolio of stocks"""

    # print("\nsession['user_id']:", session["user_id"])

    id = session["user_id"]

    rows = db.execute("SELECT ticker, SUM(shares), price FROM transactions where user_id = ? GROUP BY ticker", id)

    total_stock = 0
    rows_clean = []

    if rows:
        for row in rows:
            if not row["SUM(shares)"] == 0:
                row["price"] = lookup(row["ticker"])["price"]  # get current price
                row["total"] = usd(row["price"]*row["SUM(shares)"])
                total_stock += row["price"]*row["SUM(shares)"]
                row["price"] = usd(row["price"])
                rows_clean.append(row)

    cash = db.execute("SELECT cash FROM users WHERE id = ?", id)[0]["cash"]

    return render_template("index.html", rows=rows_clean, cash=usd(cash), total=usd(total_stock+cash))


@app.route("/buy", methods=["GET", "POST"])
@login_required
def buy():
    """Buy shares of stock"""

    if request.method == "POST":
        symbol = request.form.get("symbol").upper()
        if not lookup(symbol):
            return apology("symbol not found", 400)

        shares = float(request.form.get("shares"))
        if not shares > 0:
            return apology("number of chares should be a positive integer", 400)

        # print("\nsession['user_id']:", session["user_id"])

        id = session["user_id"]

        cash = db.execute("SELECT cash FROM users WHERE id = ?", id)[0]["cash"]

        price = float(lookup(symbol)["price"])

        if price*shares > cash:
            return apology("Insufficient balance", 400)
        else:
            db.execute("INSERT INTO transactions (user_id, ticker, price, shares) VALUES (?, ?, ?, ?)",
                       id, symbol, price, shares)
            db.execute("UPDATE users SET cash = ? WHERE id = ?", round(cash-price*shares, 2), id)
            return redirect("/")
    else:
        return render_template("buy.html")


@app.route("/history")
@login_required
def history():
    """Show history of transactions"""

    id = session["user_id"]

    rows = db.execute("SELECT ticker, shares, price, timestamp FROM transactions WHERE user_id = ?", id)

    if rows:
        return render_template("history.html", rows=rows)
    else:
        return apology("no history to show yet", 400)


@app.route("/login", methods=["GET", "POST"])
def login():
    """Log user in"""

    # Forget any user_id
    session.clear()

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":

        # Ensure username was submitted
        if not request.form.get("username"):
            return apology("must provide username", 403)

        # Ensure password was submitted
        elif not request.form.get("password"):
            return apology("must provide password", 403)

        # Query database for username
        rows = db.execute("SELECT * FROM users WHERE username = ?", request.form.get("username"))

        # Ensure username exists and password is correct
        if len(rows) != 1 or not check_password_hash(rows[0]["hash"], request.form.get("password")):
            return apology("invalid username and/or password", 403)

        # Remember which user has logged in
        session["user_id"] = rows[0]["id"]

        print("\nsession['user_id'] set as ", rows[0]["id"])

        # Redirect user to home page
        return redirect("/")

    # User reached route via GET (as by clicking a link or via redirect)
    else:
        return render_template("login.html")


@app.route("/logout")
def logout():
    """Log user out"""

    # Forget any user_id
    session.clear()

    # Redirect user to login form
    return redirect("/")


@app.route("/quote", methods=["GET", "POST"])
@login_required
def quote():
    """Get stock quote."""

    if request.method == "POST":
        symbol = request.form.get("symbol").upper()
        quoted = lookup(symbol)
        if quoted:
            return render_template("quoted.html", name=quoted["name"], symbol=quoted["symbol"], price=usd(quoted["price"]))
        else:
            return apology("symbol not found", 400)
    else:
        return render_template("quote.html")


@app.route("/register", methods=["GET", "POST"])
def register():
    """Register user"""

    session.clear()

    if request.method == "POST":
        username = request.form.get("username")
        if not username:
            return apology("must provide username", 400)

        # Ensure username is not already in the DB
        rows = db.execute("SELECT * FROM users WHERE username = ?", username)

        # print(rows)

        if len(rows) > 0:
            return apology("provided username is taken, choose a different one", 400)

        password = request.form.get("password")

        if not password:
            return apology("must provide password", 400)

        confirmation = request.form.get("confirmation")

        if not confirmation:
            return apology("must verify password", 400)

        if not password == confirmation:
            return apology("passwords must match", 400)

        # generate_password_hash(password, method='pbkdf2', salt_length=16)
        hash = generate_password_hash(password, method='pbkdf2', salt_length=16)

        db.execute("INSERT INTO users (username, hash) VALUES (?, ?)", username, hash)

        id = db.execute("SELECT id FROM users WHERE username = ?", username)[0]["id"]

        session["user_id"] = id

        return redirect("/")

    # GET - serve page with a registration form
    else:
        return render_template("register.html")


@app.route("/sell", methods=["GET", "POST"])
@login_required
def sell():
    """Sell shares of stock"""

    id = session["user_id"]

    if request.method == "POST":

        symbol = request.form.get("symbol")
        if not symbol:
            return apology("symbol not selected", 400)

        rows = db.execute("SELECT ticker, SUM(shares) from transactions where user_id = ? group by ticker", id)

        symbols = []

        for row in rows:
            if row["SUM(shares)"] > 0:
                symbols.append(row["ticker"])
            elif row["SUM(shares)"] < 0:
                return ("negative number of shares", 500)

        if not symbol in symbols:
            return apology("you don't have that stock", 400)

        shares = float(request.form.get("shares"))
        if not shares:
            return apology("number of shares not selected", 400)
        if not shares > 0:
            return apology("we can't sell that", 400)

        row = db.execute("SELECT SUM(shares) FROM transactions where user_id = ? and ticker = ? group by ticker", id, symbol)

        if shares > float(row[0]["SUM(shares)"]):
            return apology("you don't have that many shares of a given stock", 400)

        price = lookup(symbol)["price"]

        db.execute("INSERT INTO transactions (user_id, ticker, price, shares) VALUES (?,?,?,?)",
                   id, symbol, price, (-1)*shares)

        cash = db.execute("SELECT cash FROM users WHERE id = ?", id)[0]["cash"]

        db.execute("UPDATE users SET cash = ? where id = ?", cash+round(price*shares, 2), id)

        return redirect("/")

    else:
        rows = db.execute("SELECT ticker, SUM(shares) from transactions where user_id = ? GROUP BY ticker", id)
        stocks = []
        for row in rows:
            if row["SUM(shares)"] > 0:
                stocks.append(row)
        return render_template("sell.html", stocks=stocks)
