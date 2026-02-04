/*
Q.
5.
Obtain a list of all MSPs by name, give the name of the MSP and the name of the party where available. Be sure that Canavan MSP, Dennis is in the list. Use ORDER BY msp.name to sort your output by MSP.


*/
SELECT msp.Name, party.Name
FROM msp LEFT JOIN party ON (msp.party = party.code)

ORDER BY msp.name;
