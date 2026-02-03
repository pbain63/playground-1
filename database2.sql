/*
Q.
13.
Obtain a list, in alphabetical order, of actors who've had at least 15 starring roles.




*/

SELECT name
FROM actor 
  JOIN casting ON actor.id = casting.actorid
  JOIN movie ON movie.id = casting.movieid  
WHERE ord = 1
GROUP BY name
HAVING COUNT(movieid) >= 15
