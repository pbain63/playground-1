/*
Q.
3.
Give the party and the leader for the parties which have leaders.


*/

SELECT party.Name, party.Leader
FROM party
WHERE Leader IS NOT NULL;