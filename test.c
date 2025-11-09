#include <stdio.h>
int main()
{
    int marks;
    scanf("%d", &marks);
    if (marks >= 80)
    {
        printf("Your grade is A+\n");
    }
    else if (marks >= 70)
    {
        printf("Your grade is A\n");
    }
    else
    {
        printf("Your grade is F\n.");
    }
    return 0;
}