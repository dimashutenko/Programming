#resources
#
#https://docs.python.org/3/library/csv.html#csv.DictReader
#https://docs.python.org/3/library/csv.html#csv.reader
#https://docs.python.org/3.3/tutorial/inputoutput.html#methods-of-file-objects
#https://realpython.com/python-csv/#reading-csv-files-with-csv
#https://www.geeksforgeeks.org/load-csv-data-into-list-and-dictionary-using-python/


import csv
import sys


def main():

    # TODO: Check for command-line usage

    try:
        if(len(sys.argv) < 3):
            pass
        else:
            db_filename = sys.argv[1]
            sequence_filename = sys.argv[2]
    except:
        print("Usage: python dna.py data.csv sequence.txt")
        exit()

    # TODO: Read database file into a variable

    list_of_dicts = []

    # Open file
    with open(db_filename) as csv_file:
        # Create reader object by passing the file object to reader method
        csv_reader = csv.DictReader(csv_file, delimiter=',')
        line_count = 0
        # Iterate over each row in the csv file using reader object
        for row in csv_reader:
            list_of_dicts.append(row)

        # print("\n"+list_of_dicts)


    # TODO: Read DNA sequence file into a variable

    sequence_file = open(sequence_filename, 'r') #  file object
    sequence = sequence_file.read() #  reads some quantity of data (size) and returns it as a string or bytes object

    # TODO: Find longest match of each STR in DNA sequence

    person_dict = {}

    db_dict_0 = list_of_dicts[0]

    #print("\nDictionary 0 : " + str(db_dict_0)+'\n')

    for i in list(db_dict_0.keys()): # STRs
        if i != 'name': # i is STR
            biggest_str_count = longest_match(sequence, i)
            #print(f"STR `{i}` is repeated consecutively {biggest_str_count} times")
            person_dict[i] = biggest_str_count

    #print(f"str(person_dict)+"\n")

    # TODO: Check database for matching profiles

    for person in list_of_dicts:
        i = 0
        for key in list(person.keys()):
            if key != 'name':
                str = key
                b = list(person_dict.keys())[i]
                if str == b:
                    if int(person[str]) == person_dict[b]:
                        i+=1
                        if i == len(person_dict.keys()):
                            print(person['name'])
                            break
                else:
                    break

        q = list_of_dicts[len(list_of_dicts)-1]
        if person['name'] == q['name']:
            print("No match")

    return


def longest_match(sequence, subsequence):
    """Returns length of longest run of subsequence in sequence."""

    # Initialize variables
    longest_run = 0
    subsequence_length = len(subsequence)
    sequence_length = len(sequence)

    # Check each character in sequence for most consecutive runs of subsequence
    for i in range(sequence_length):

        # Initialize count of consecutive runs
        count = 0

        # Check for a subsequence match in a "substring" (a subset of characters) within sequence
        # If a match, move substring to next potential match in sequence
        # Continue moving substring and checking for matches until out of consecutive matches
        while True:

            # Adjust substring start and end
            start = i + count * subsequence_length
            end = start + subsequence_length

            # If there is a match in the substring
            if sequence[start:end] == subsequence:
                count += 1

            # If there is no match in the substring
            else:
                break

        # Update most consecutive matches found
        longest_run = max(longest_run, count)

    # After checking for runs at each character in seqeuence, return longest run found
    return longest_run


main()
