/*
Q.5.
Show the name and the population of each country in 
Europe. Show the population as a percentage of the 
population of Germany.
*/

SELECT name, CONCAT(ROUND((population / (SELECT 
    population FROM world WHERE name = 'Germany'))*100, 0), '%')
FROM world
WHERE continent = 'Europe'; 