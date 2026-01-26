/*
Q.
3. Select the code that shows the countries with a less
 than a third of the population of the countries 
 around it
*/

SELECT name, region FROM bbc x
 WHERE population < ALL (SELECT population/3 
    FROM bbc y WHERE y.region = x.region 
    AND y.name != x.name)
