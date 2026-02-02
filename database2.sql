/*
Q.
13.
List every match with the goals scored by each team as
 shown. This will use "CASE WHEN" which has not been
  explained in any previous exercises.
d.


*/

SELECT game.mdate, game.team1, 
SUM(CASE WHEN goal.teamid = game.team1 THEN 1 ELSE 0 END) AS score1,
game.team2,
SUM(CASE WHEN goal.teamid = game.team2 THEN 1 ELSE 0 END) AS score2

FROM game LEFT JOIN goal ON matchid = id
GROUP BY game.id,game.mdate, game.team1, game.team2 
ORDER BY mdate,matchid,team1,team2;

