#include <stdio.h>
int main()
{
    double C, F;
    scanf("%lf", &F);
    C = ((F - 32) / 9) * 5;
    printf("%lf\n", C);
    return 0;
}