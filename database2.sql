/*
Q.
6.
Obtain a list of parties which have MSPs, include the number of MSPs.



*/

SELECT party.Name, COUNT(msp.Name)
FROM msp LEFT JOIN party ON (msp.party = party.code)
WHERE party.Name IS NOT NULL
GROUP BY party.Name;