/*
Q.7.
Show the name and population for each country with 
a population of more than 100000000. Show countries
 in descending order of population.
 */


SELECT name, population
  FROM world
  WHERE population > 100000000
  ORDER BY population DESC

