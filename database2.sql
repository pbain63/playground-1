/*
Q.
5.
GROUP BY and HAVING. The HAVING clause is tested 
after the GROUP BY. You can test the aggregated 
values with a HAVING clause. Show the total 
population of those continents with a total 
population of at least half a billion.

*/

SELECT continent, SUM(population)
  FROM world
 GROUP BY continent
HAVING SUM(population)>500000000


