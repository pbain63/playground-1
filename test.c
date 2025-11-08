#include <stdio.h>
int main()
{
    int n1 = 5, n2 = 7;
    if (n1 == n2)
    {
        printf("Numbers are equal.");
    }
    else if (n1 > n2)
    {
        printf("n1 is greater than n2.");
    }

    else
    {
        printf("n1 is smaller than n2.");
    }

    return 0;
}