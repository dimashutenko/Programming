#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>

string encrypt(string plain_text, string key);

int main(int argc, string argv[])
{
    if (argv[1] == NULL)
    {
        printf("Usage: ./substitution key\n");
        return 1;
    }
    else if (strlen(argv[1]) < 26 || strlen(argv[1]) > 26)
    {
        printf("Key must contain 26 characters.\n");
        return 1;
    }
    else if (argc > 2)
    {
        printf("Usage: ./substitution key\n");
        return 1;
    }
    else
    {
        for (int i = 0, n = strlen(argv[1]) ; i < n ; i++) // checking for non-alphabetic characters
        {
            if (isalpha(argv[1][i]) == 0)
            {
                printf("Key must only contain alphabetic characters.\n");
                return 1;
            }
            for (int j = i + 1 ; j < n ; j++) // checking for double letters
            {
                if (argv[1][i] == argv[1][j])
                {
                    printf("Key must only contain repeated characters.\n");
                    return 1;
                }
            }
        }

        // program execution
        string plain_text = get_string("plaintext: ");
        printf("ciphertext: %s\n", encrypt(plain_text, argv[1]));
        return 0;
    }
}

string encrypt(string plain_text, string key)
{
    string ciphertext = plain_text;

    for (int i = 0, n = strlen(plain_text) ; i < n ; i++)
    {
        if (islower(plain_text[i]))
        {
            ciphertext[i] = tolower(key[plain_text[i] - 97]);
        }
        else if (isupper(plain_text[i]))
        {
            ciphertext[i] = toupper(key[plain_text[i] - 65]);
        }
    }
    return ciphertext;
}