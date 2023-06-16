while True:
    n = input("Height: ")
    try:
        n = int(n)
        if n >= 1 and n <= 8:
            break
    except:
        print("Try again")

for i in range(1, n+1):
    print(" "*(n-i), end="")
    print("#"*i, end="  ")
    print("#"*i, end="\n")