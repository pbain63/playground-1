--> 4
SELECT name FROM world
 WHERE population > ALL
      (SELECT population FROM world
        WHERE continent='Europe')

