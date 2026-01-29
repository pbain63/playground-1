/*
Q.
5.
For each continent show the total population:

*/

SELECT continent, COUNT(name)
FROM world
GROUP BY continent