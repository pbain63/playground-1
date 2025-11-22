#include <stdio.h>
int main()
{
    int n, sum;
    // sum = 0;
    for (n = 1; n <= 100; n = n + 1)
    {
        if (n % 2 == 1)
        {
            printf("Result: %d\n", n);
        }
        // sum = sum + n;
    }
    return 0;
}
