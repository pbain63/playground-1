-- 9
SELECT yr, subject, winner
FROM nobel
WHERE yr = 1980 AND subject NOT LIKE "chemistry" AND subject NOT LIKE "medicine";
