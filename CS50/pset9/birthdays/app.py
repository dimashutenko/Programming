import os

from cs50 import SQL
from flask import Flask, flash, jsonify, redirect, render_template, request, session

# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///birthdays.db")


@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":

        # TODO: Add the user's entry into the database

        name = request.form.get("name")
        if name:
            birthday_month = request.form.get("birthday_month")
            birthday_day = request.form.get("birthday_day")
            if birthday_month and birthday_day:
                db.execute("INSERT INTO birthdays (name, month, day) VALUES (?, ?, ?)", name, birthday_month, birthday_day)
            else:
                print("insertion failed, either birthday_month or birthday_day are invalid")
        else:
            print("insertion failed, name is invalid")

        return redirect("/")

    else:

        # TODO: Display the entries in the database on index.html

        birthdays = db.execute("SELECT * from birthdays")

        return render_template("index.html", birthdays=birthdays)


