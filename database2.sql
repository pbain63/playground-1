/*
Q.
4.
For each subject show the subject and the number 
of prizes.

*/

SELECT subject, COUNT(subject)
FROM nobel
GROUP BY subject;


