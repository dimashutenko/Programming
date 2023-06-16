#include <cs50.h>
#include <stdio.h>

int main(void)
{
    long card = get_long("Enter card number: "), card_copy = card;
    int position = 1, total_sum = 0, digit_doubled;
    while (card != 0)
    {
        if (position % 2 == 0) // n-1, n-3, n-5
        {
            digit_doubled = 2 * (card % 10);
            total_sum += digit_doubled % 10 + ((digit_doubled - digit_doubled % 10) / 10 % 10);
            // before breaking into digits ======> total_sum += 2 * (card % 10)
        }
        else // n, n-2, n-4
        {
            total_sum += card % 10;
        }
        position++;
        card /= 10;
    }

    if (total_sum % 10 == 0)
    {
        card = card_copy;
        while (card >= 100)
        {
            card /= 10;
        }
        int first_digits = card, first_digit = (first_digits - first_digits % 10) / 10 % 10;
        position--;
        if (position == 15)
        {
            (first_digits == 34 || first_digits == 37) ? printf("AMEX\n") : printf("INVALID\n");
        }
        else if (first_digit == 4)
        {
            (position == 16 || position == 13) ? printf("VISA\n") : printf("INVALID\n");
        }
        else if (position == 16)
        {
            (first_digits == 51 || first_digits == 52 || first_digits == 53 || first_digits == 54
             || first_digits == 55) ? printf("MASTERCARD\n") : printf("INVALID\n");
        }
        else
        {
            printf("INVALID\n");
        }
    }
    else
    {
        printf("INVALID\n");
    }

}