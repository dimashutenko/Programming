#include <cs50.h>
#include <stdio.h>
#include <string.h>

// Max number of candidates
#define MAX 9

// preferences[i][j] is number of voters who prefer i over j
int preferences[MAX][MAX];

// locked[i][j] means i is locked in over j; true represents the existence of an edge pointing from candidate i to candidate j; false means there is no edge.
bool locked[MAX][MAX];

// Each pair has a winner, loser
typedef struct
{
    int winner;
    int loser;
    int victory_strength;
}
pair;

// Array of candidates
string candidates[MAX];
pair pairs[MAX * (MAX - 1) / 2];

int pair_count;
int candidate_count;

int columns_with_true[MAX * (MAX - 1) / 2], number_of_columns_with_true = 0;  // originaly columns_with_true[pair_count]

// Function prototypes
bool vote(int rank, string name, int ranks[]);
void record_preferences(int ranks[]);
void add_pairs(void);
void sort_pairs(void);
void lock_pairs(void);
void print_winner(void);
int elem_in_array(int elem, int array[], int size);

int main(int argc, string argv[])
{
    // Check for invalid usage
    if (argc < 2)
    {
        printf("Usage: tideman [candidate ...]\n");
        return 1;
    }

    // Populate array of candidates
    candidate_count = argc - 1;
    if (candidate_count > MAX)
    {
        printf("Maximum number of candidates is %i\n", MAX);
        return 2;
    }
    for (int i = 0; i < candidate_count; i++)
    {
        candidates[i] = argv[i + 1];
    }

    // Clear graph of locked in pairs
    for (int i = 0; i < candidate_count; i++)
    {
        for (int j = 0; j < candidate_count; j++)
        {
            locked[i][j] = false;
        }
    }

    pair_count = 0;
    int voter_count = get_int("Number of voters: ");

    // Query for votes
    for (int i = 0; i < voter_count; i++)
    {
        // ranks[i] is voter's ith preference
        int ranks[candidate_count];

        // Query for each rank
        for (int j = 0; j < candidate_count; j++)
        {
            string name = get_string("Rank %i: ", j + 1);

            if (!vote(j, name, ranks))
            {
                printf("Invalid vote.\n");
                return 3;
            }
        }

        record_preferences(ranks);

        printf("\n");
    }

    add_pairs();
    sort_pairs();
    lock_pairs();
    print_winner();
    return 0;
}

// Update ranks given a new vote
bool vote(int rank, string name, int ranks[]) ////////////////////////////////////////////////////////////// vote /////
{
    for (int i = 0; i < candidate_count; i++)
    {
        if (strcmp(name, candidates[i]) == 0)
        {
            ranks[rank] = i; // update ranks array for that partcicular voter  (ranks[i] is the voter's i-th prefference)
            return true;
        }
    }

    return false;
}

// Update preferences given one voter's ranks
void record_preferences(int ranks[]) /////////////////////////////////////////////// record_preferences /////
{
    for (int i = 0; i < candidate_count - 1; i++)
    {
        for (int j = i; j < candidate_count; j++)
        {
            if (j > i)
            {
                preferences[ranks[i]][ranks[j]] += 1;
            }
        }
    }

    return;
}

// Record pairs of candidates where one is preferred over the other
void add_pairs(void) ///////////////////////////////////////////////////////////////////////// add_pairs /////
{
    for (int i = 0; i < candidate_count; i++)
    {
        for (int j = 0; j < candidate_count; j++)
        {
            if (preferences[i][j] > preferences[j][i])
            {
                pair new_pair;
                new_pair = (pair)
                {
                    .winner = i,
                    .loser = j,
                    .victory_strength = preferences[i][j] - preferences[j][i]
                };
                pairs[pair_count] = new_pair;
                pair_count++;
            }
        }
    }

    return;
}

// Sort pairs in decreasing order by strength of victory
void sort_pairs(void) ///////////////////////////////////////////////////////////////////////// sort_pairs /////
{
    for (int i = 0; i < pair_count; i++) // attempt 1: sorting with selection sort
    {
        int max_victory_strength = 0;
        int index_of_pair_with_max_victory_strength =0;

        for (int j = i; j < pair_count; j++)
        {
            if (pairs[j].victory_strength > max_victory_strength)
            {
                max_victory_strength = pairs[j].victory_strength;
                index_of_pair_with_max_victory_strength = j;
            }
        }

        // swap

        pair buffer;
        buffer = (pair)
        {
            .winner = pairs[i].winner,
            .loser = pairs[i].loser,
            .victory_strength = pairs[i].victory_strength
        };

        pairs[i].winner = pairs[index_of_pair_with_max_victory_strength].winner;
        pairs[i].loser = pairs[index_of_pair_with_max_victory_strength].loser;
        pairs[i].victory_strength = pairs[index_of_pair_with_max_victory_strength].victory_strength;

        pairs[index_of_pair_with_max_victory_strength].winner = buffer.winner;
        pairs[index_of_pair_with_max_victory_strength].loser = buffer.loser;
        pairs[index_of_pair_with_max_victory_strength].victory_strength = buffer.victory_strength;

    }

    //
    for (int i = 0; i < pair_count; i++)
    {
        printf("pairs[%i].winner = %i\n", i, pairs[i].winner);
        printf("pairs[%i].loser = %i\n", i, pairs[i].loser);
        printf("pairs[%i].victory_strength = %i\n\n", i, pairs[i].victory_strength);
    }

    return;
}

// Lock pairs into the candidate graph in order, without creating cycles
void lock_pairs(void) ///////////////////////////////////////////////////////////////////////// lock_pairs /////
{
    // locked[i][j] means i is locked in over j;
    // true represents the existence of an edge pointing from candidate i to candidate j;
    // false means there is no edge.

    // int columns_with_true[pair_count], number_of_columns_with_true = 0; made global

    for(int z = 0; z < pair_count; z++)
    {
        columns_with_true[z] = -1;
    }

    for (int i = 0; i < pair_count; i++)
    {

        for (int k = 0; k < pair_count; k++)
        {
            for (int p = 0; p < pair_count; p++)
            {
                if (locked[p][k] == true)
                {                 // k
                    if(elem_in_array(k, columns_with_true, MAX * (MAX - 1) / 2) != 0) // if k isn't in array columns_with_true[pair_count]
                    {
                        columns_with_true[number_of_columns_with_true - 1] = k; // number_of_columns_with_true is already 1 after one cycle
                        // number_of_columns_with_true++;                 // k
                    }

                }
            }
        }
                                                  // - 1
        if (number_of_columns_with_true < pair_count) // ONE LESS THAN AMONT OF ARROWS TO BE DRAWN
        {
            locked[pairs[i].winner][pairs[i].loser] = true;
            number_of_columns_with_true++;
        }


        // do
        // {
        //     locked[pairs[i].winner][pairs[i].loser] = true;
        //     number_of_columns_with_true++;
        // }
        // while (number_of_columns_with_true < pair_count - 2); // REALY DONE ONCE

    }

    return;
}

// Print the winner of the election
void print_winner(void)   // option 2 use info from columns_with_true[]
{

    for (int i = 0; i < pair_count; i++)
    {
        if (elem_in_array(i, columns_with_true, MAX * (MAX - 1) / 2)  == -1) // if not found
        {
            printf("%s\n", candidates[i]); // print winner
        }
    }


    // for (int i = 0; i < pair_count; i++)
    // {
    //     bool winner_found = false;

    //     for (int j = 0; j < pair_count; j++)
    //     {
    //         if(locked[i][j] == true)
    //         {
    //             break;
    //         }
    //         printf("%s\n", candidates[i]); // ?
    //     }

    // }


    return;
}

int elem_in_array(int elem, int array[], int size)
{
    for( int i=0; i < size; i++)
    {
        if(array[i] == elem)
        {
            return 0;
        }
    }
    return -1;
}