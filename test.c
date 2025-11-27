#include <stdio.h>
int main()
{
    int marks[] = [ 87, 82, 76, 85, 88 ];
    int i;
    for (i = 0; i < 5; i++)
    {
        scanf("%d", &marks[i]);
        // printf("%d\n", marks[i]);
    }
    return 0;
}