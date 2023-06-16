from cs50 import get_int

card = get_int("Enter card number: ")
card_copy = card
position = 1
total_sum = 0
digit_doubled = 0

while card != 0:
    if position % 2 == 0:  # n-1, n-3, n-5
        digit_doubled = 2 * (card % 10)
        total_sum += int(digit_doubled % 10 + ((digit_doubled - digit_doubled % 10) / 10 % 10))
        # before breaking into digits ======> total_sum += 2 * (card % 10)
    else:  # n, n-2, n-4
        total_sum += card % 10
    position += 1
    card = int(card/10)
    #  print(f"total_sum: {total_sum}")

if total_sum % 10 == 0:
    while card_copy >= 100:
        card_copy /= 10

    first_digits = int(card_copy)
    first_digit = (first_digits - first_digits % 10) / 10 % 10

    position -= 1

    if position == 15:
        print("AMEX") if first_digits in [34, 37] else print("INVALID")
    elif first_digit == 4:
        print("VISA") if position in [16, 13] else print("INVALID")
    elif position == 16:
        print("MASTERCARD") if first_digits in range(51, 56, 1) else print("INVALID")
        # from 51 (included)  to 56 (not included), 1 --> step
    else:
        print("INVALID")

else:
    print("INVALID")