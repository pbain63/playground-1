--> 1
SELECT name, gdp_per_capita
FROM (SELECT name, gdp/population AS gdp_per_capita
    FROM world) X
WHERE gdp_per_capita > 20000;