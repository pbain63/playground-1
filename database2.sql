-- 14
select
    winner
    , subject
from nobel
where yr = 1984
order by
    case
        when subject in ('Physics', 'Chemistry') then 1
        else 0
    end
    , subject
    , winner