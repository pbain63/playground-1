/*
Q.
5.
For each subject show the first year that the prize 
was awarded.


*/

SELECT subject, MIN(yr)
FROM nobel
GROUP BY subject;


