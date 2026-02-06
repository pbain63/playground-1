/*
Q.
3.
The number of confirmed case is cumulative - but we can use LAG to recover the number of new cases reported for each day.

Show the number of new cases for each day, for Italy, for March.

*/

SELECT 
  name, 
  DAY(whn), 
  confirmed - LAG(confirmed, 1) OVER (PARTITION BY name ORDER BY whn) AS new
FROM covid
WHERE name = 'Italy' 
  AND MONTH(whn) = 3 
  AND YEAR(whn) = 2020
ORDER BY whn;