#include <stdio.h>
#include <cs50.h>

int main(void){

    int n;
    do{
        n=get_int("Height: ");
    } while (n<1 || n>8);

    for(int i=0; i<n; i++){
        for(int a=0; a<n-i-1; a++){
            printf(" ");
        }
        for(int j=0; j<=i; j++){
            printf("#");
        }
        printf("  ");
        for(int j=0; j<=i; j++){
            printf("#");
        }
        printf("\n");
    }


}