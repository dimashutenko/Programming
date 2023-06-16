#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <math.h>

int count_letters(string text);

int count_words(string text);

int count_sentences(string text);

int main(void)
{
    string text = get_string("Text: ");
    // printf("%s\n", text);
    // printf("%i letters\n", count_letters(text));
    // printf("%i words\n", count_words(text));
    // printf("%i sentences\n", count_sentences(text));
    float L = count_letters(text) * 100 / (float) count_words(text);
    float S = count_sentences(text) * 100 / (float) count_words(text);
    int index = round(0.0588 * L - 0.296 * S - 15.8);
    if (index < 1)
    {
        printf("Before Grade 1\n");
    }
    else if (index >= 16)
    {
        printf("Grade 16+\n");
    }
    else
    {
        printf("Grade %i\n", index);
    }

}

int count_letters(string text)
{
    int letters_counter = 0;
    for (int i = 0, n = strlen(text) ; i < n ; i++)
    {
        if (isalpha(text[i])) // counting letters
        {
            letters_counter++;
        }
    }

    return letters_counter;
}

int count_words(string text)
{
    int words_counter = 0;

    for (int i = 1, n = strlen(text) ; i < n ; i++)
    {
        if (text[i] == ' ') // doesn't count last word
        {
            words_counter++;
        }
    }

    return ++words_counter; // counts last word
}

int count_sentences(string text)
{
    int sentences_counter = 0;

    for (int i = 2, n = strlen(text) ; i < n ; i++)
    {
        if (isalpha(text[i - 1]) != 0) // isalpha() returns a non-zero int if char is alphabetical and 0 if char is not alphabetical.
        {
            if (text[i] == '.' || text[i] == '!' || text[i] == '?')
            {
                sentences_counter++;
            }
        }
    }

    return sentences_counter;
}