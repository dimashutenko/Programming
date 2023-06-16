#include <stdio.h>
#include <cs50.h>
#include <math.h>

int main(void){

    long credit = get_long("Number: "), credit_initial=credit;
    int position=0, total_sum=0;

    while(credit!=0){
        if(position%2==0){  // n , n-2 , n-4
            total_sum+=credit%10;
        } else {  // n-1 , n-3 , n-5
            total_sum = total_sum + (2*(credit%10))%10 + (2*(credit%10) - (2*(credit%10))%10)/10;  // total_sum+=2*credit%10; before breaking into digits
        }
        // printf("position=%i\n", position);
        // printf("credit=%li\n", credit);
        // printf("total_sum=%i\n", total_sum);
        credit/=10;
        position++;
    }
    //printf("total_sum:%i\n", total_sum);
    if(total_sum%10==0){
        credit=credit_initial;
        while(credit >= 100) {
            credit /= 10;
            //printf("credit=%li\n",credit);
        }

        int first_digits = credit;
        while(credit>=10){
            credit/=10;
        }
        int first_digit = credit;
        //printf("pos=%i, first_digits=%i, first_digit=%i\n", position, first_digits, first_digit);
        if(position==15){
            if(first_digits==34 || first_digits==37){
                printf("AMEX\n");
            }
        } else if (first_digit==4){
            if(position==16 || position==13 ){
                printf("VISA\n");
            }
        } else if (position==16){
            if(first_digits==51 || first_digits==52 || first_digits==53 || first_digits==54 || first_digits==55){
                printf("MASTERCARD\n");
            }
        }
    } else {
        printf("INVALID\n");
    }


}
