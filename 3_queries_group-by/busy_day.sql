SELECT assignments.day, count(*) FROM assignments
group by assignments.day
having count(*) >= 10
order by assignments.day;