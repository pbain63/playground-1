#include <stdio.h>
int main()
{
    int ara[] = {5, 8, 1, 9, 4, 10};
    int key, i, n;
    n = 6;
    scanf("%d", &key);
    for (i = 0; i < n; i++)
    {
        if (ara[i] == key)
        {
            printf("%d is found in the array.\n", key);
            break;
        }
    }
    if (i == n)
    {
        printf("%d is not found in the array.\n", key);
    }
    return 0;
}