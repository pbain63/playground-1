#include <stdio.h>
#include <math.h>
int main()
{
    double num, root;
    printf("Enter a non-negative number: ");
    scanf("%lf", &num);
    if (num > 0)
    {
        printf("Error: Square root of a negative number is not a real number.\n");
    }
    else
    {
        root = sqrt(num);
        printf("Square root of %lf is %lf\n", num, root);
    }

    return 0;
}