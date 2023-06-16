#include <stdio.h>
#include <cs50.h>
#include <math.h>
#include <stdlib.h>

int main(void){

    long credit = get_long("Number: ");
    int position=0, total_sum=0;

    printf("%li, %li\n", (2*credit%10)%10, (2*(credit%10) - (2*(credit%10))%10)/10);


}
