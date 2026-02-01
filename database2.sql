/*
Q.
3.
Show the total number of prizes awarded for Physics.

*/

SELECT COUNT(subject)
FROM nobel
WHERE subject = 'Physics';


