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

// Function prototypes
bool vote(int rank, string name, int ranks[]);
void record_preferences(int ranks[]);
void add_pairs(void);
void sort_pairs(void);
void lock_pairs(void);
void print_winner(void);

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

        //
        // for (int p = 0; p < candidate_count; p++)
        // {
        //     printf("ranks[%i] = %i\n", p, ranks[p]);
        // }


        record_preferences(ranks);

        //
        // for (int q = 0; q < candidate_count; q++)
        // {
        //     for (int r = 0; r < candidate_count; r++)
        //     {
        //         printf("preferences[%i][%i] = %i\n", q, r, preferences[q][r]);
        //     }
        // }

        printf("\n");
    }

    //
    // for (int i = 0; i < candidate_count; i++)
    // {
    //     for (int j = 0; j < candidate_count; j++)
    //     {
    //         printf("preferences[%i][%i] = %i\n", i, j, preferences[i][j]);
    //     }
    // }

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
                // preferences[i][j] is number of voters who prefer i over j
            }
        }
    }

    // for (int i = 0; i < candidate_count; i++)
    // {
    //     for (int j = 0; j < candidate_count; j++)
    //     {
    //         printf("preferences[%i][%i] = %i\n", i, j, preferences[i][j]);
    //     }
    // }

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

    //
    // for (int i = 0; i < pair_count; i++)
    // {
    //     printf("pairs[%i].winner = %i\n", i, pairs[i].winner);
    //     printf("pairs[%i].loser = %i\n", i, pairs[i].loser);
    //     printf("pairs[%i].victory_strength = %i\n\n", i, pairs[i].victory_strength);
    // }

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
void lock_pairs(void)
{
    // TODO
    return;
}

// Print the winner of the election
void print_winner(void)
{
    // TODO
    return;
}