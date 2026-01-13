-- 5
SELECT yr, subject, winner
FROM nobel
WHERE subject = 'literature' AND yr >= 1980 AND yr <= 1989;