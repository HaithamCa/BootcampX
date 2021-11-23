SELECT assignments.day, count(*) FROM assignments
group by assignments.day
order by assignments.day; 