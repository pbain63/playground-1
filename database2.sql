/*
Q.
5.
WHERE and GROUP BY. The WHERE filter takes place 
before the aggregating function. For each relevant 
continent show the number of countries that has a 
population of at least 200000000.

*/

SELECT continent, COUNT(name)
  FROM world
 WHERE population>200000000
 GROUP BY continent

