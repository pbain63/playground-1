--> 3
SELECT name
  FROM bbc b1
 WHERE population> 
  5*(SELECT AVG(population) FROM bbc
     WHERE region=b1.region)
