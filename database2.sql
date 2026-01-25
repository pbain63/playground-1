/*
Q.1.
List each continent and the name of the country that 
comes first alphabetically.
 */

SELECT x.continent, x.name
FROM world x
  WHERE x.name <= ALL(SELECT y.name FROM world y
     WHERE x.continent = y.continent)
ORDER BY continent