/*
Q.10.
Some countries have populations more than three times 
that of all of their neighbours (in the same continent). 
Give the countries and continents. 
*/

SELECT x.name, x.continent
FROM world x
WHERE  x.population >= ALL (SELECT y.population *3 
    FROM world y WHERE x.continent = y.continent 
    AND x.name <> y.name)
            