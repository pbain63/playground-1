/*
Q.
7.
Give a list of all the services which connect stops 115 and 137 ('Haymarket' and 'Leith')

*/

SELECT DISTINCT a.company, a.num
FROM route a
JOIN route b ON (a.company = b.company AND a.num = b.num)
WHERE a.stop = 115 AND b.stop = 137;
