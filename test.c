#include <stdio.h>
int main()
{
    int i, n;
    printf("Enter the number for the multiplication table: ");
    scanf("%d", &n);
    printf("\nMultiplication Table for %d : \n", n);
    for (i = 1; i <= 10; i = i + 1)
    {
        printf("%d x %d = %d\n", n, i, n * i);
    }
    return 0;
}
