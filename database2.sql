/*
Q.7.
 The total population and GDP of Europe
 */


SELECT SUM(population), SUM(gdp)
  FROM world
  WHERE continent = 'Europe'
