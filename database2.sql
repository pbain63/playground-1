/*
Q.
6.
For each subject show the number of prizes awarded 
in the year 2000.

d.


*/

SELECT subject, COUNT(subject)
FROM nobel
WHERE yr = '2000'
GROUP BY subject;


