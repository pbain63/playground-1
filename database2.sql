/*
Q.
7.
A list of parties with the number of MSPs; include parties with no MSPs.




*/

SELECT party.Name, COUNT(msp.Name)
FROM msp RIGHT JOIN party ON (msp.party = party.code)

GROUP BY party.Name;