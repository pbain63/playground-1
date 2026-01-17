--> 2
SELECT name
FROM world
WHERE continent IN 
(SELECT continent
FROM world
WHERE name = 'Brazil' OR name = 'Mexico')