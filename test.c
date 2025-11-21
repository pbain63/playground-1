#include <stdio.h>
int main()
{
    int n, sum;
    sum = 0;
    for (n = 1; n <= 100; n = n + 1)
    {
        sum = sum + n;
    }
    printf("Result: %d\n", sum);
    return 0;
}
