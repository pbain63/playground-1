/*
Q.
12.
List the film title and the leading actor for all of the films 'Julie Andrews' played in.

Did you get "Little Miss Marker twice"?
Julie Andrews starred in the 1980 remake of Little Miss Marker and not the original(1934).

Title is not a unique field, create a table of IDs in your subquery




*/

SELECT title, name
  FROM movie JOIN casting ON (movieid = movie.id                                               AND ord = 1)
             JOIN actor ON (actorid = actor.id)
  WHERE movie.id IN (
     SELECT movieid FROM casting
        WHERE actorid IN (
          SELECT id FROM actor
            WHERE name = 'Julie Andrews'))