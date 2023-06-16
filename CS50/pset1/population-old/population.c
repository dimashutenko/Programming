#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int starting_population, ending_population,  years=0;

    do{
        starting_population = get_int("Please enter a starting population size: ");
    } while(starting_population<9);
    int current_population=starting_population;
    do{
        ending_population = get_int("Please enter an ending population size: ");
    } while(ending_population<starting_population);

    while(current_population<ending_population) {
        current_population=current_population+current_population/3-current_population/4;
        years++;
    }

    printf("Years: %i\n", years);
}