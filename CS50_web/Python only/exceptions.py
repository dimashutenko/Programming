import sys

try:
    x = int(input("x = "))
    y = int(input("y = "))
except ValueError:
    print("Please use numbers next time")
    sys.exit(1)

try:
    result = x / y
except ZeroDivisionError:
    print("It's not OK to devide by zero, go and study Math")
    sys.exit(1)

print(f"{x} devided by {y} equals to {result}")

