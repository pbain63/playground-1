#include <stdio.h>

int main()
{
    int i;
    for (i = 1; i <= 5; i = i + 1)
    {
        // FIX 1: Change assignment (=) to comparison (==)
        if (i == 1)
        {
            continue; // Skips the rest of the loop body (printf) for i=1
        }
        
        // FIX 2: Move printf outside the continue block
        printf("%d", i);
    }
    
    // Add a newline for clean output
    printf("\n");
    
    return 0;
}