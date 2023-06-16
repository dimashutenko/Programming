from cs50 import get_string
#import math


def main():
    text = get_string("Text: ")
    # print(f"text: {text}")
    # print(f"letters: {count_letters(text)}")
    # print(f"words: {count_words(text)}")
    # print(f"sentences: {count_sentences(text)}")
    L = count_letters(text) * 100 / float(count_words(text))
    S = count_sentences(text) * 100 / float(count_words(text))
    index = round(0.0588 * L - 0.296 * S - 15.8)
    if index < 1:
        print("Before Grade 1")
    elif index >= 16:
        print("Grade 16+")
    else:
        print(f"Grade {index}")


def count_letters(text):
    letters_counter = 0
    for i in range(len(text)):
        if text[i].isalpha() == True:
            letters_counter += 1
    return letters_counter


def count_words(text):
    words_counter = 0
    for i in range(len(text)):
        if text[i] == ' ':
            words_counter += 1
    words_counter += 1
    return words_counter


def count_sentences(text):
    sentences_counter = 0
    for i in range(1, len(text)):
        if text[i].isalpha() != True:
            if text[i] in ['.', '?', '!']:
                sentences_counter += 1
    return sentences_counter


if __name__ == "__main__":
    main()