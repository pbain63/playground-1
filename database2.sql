/*
Q.
14.
List the films released in the year 1978 ordered by the number of actors in the cast, then by title.



*/

SELECT title, COUNT(actorid)
FROM actor 
  JOIN casting ON actor.id = casting.actorid
  JOIN movie ON movie.id = casting.movieid  
WHERE yr = 1978
GROUP BY title
ORDER BY COUNT(actorid) DESC, title ASC;