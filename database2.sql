/*
Q.
15.
List all the people who have worked with 'Art Garfunkel'.



*/

SELECT DISTINCT actor.name
FROM movie
JOIN casting
ON casting.movieid = movie.id
JOIN actor
ON actor.id = casting.actorid
WHERE movie.id IN (SELECT movieid FROM casting JOIN actor ON id =actorid WHERE 
actor.name = 'Art Garfunkel') AND actor.name <> 'Art Garfunkel'