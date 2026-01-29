/*
Q.
5.
For each continent show the number of countries:

*/

SELECT continent, COUNT(name)
FROM world
GROUP BY continent