--> 3
SELECT
 population/(SELECT population FROM world
             WHERE name='United Kingdom')
  FROM world
WHERE name = 'China'
