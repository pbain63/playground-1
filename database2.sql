-- 8
SELECT yr, subject, winner
FROM nobel
WHERE (subject = "physics" AND yr = 1980) OR (subject = "chemistry" AND yr = 1984);