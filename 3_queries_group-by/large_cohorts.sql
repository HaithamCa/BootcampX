SELECT cohorts.name, count(students.*) 
FROM cohorts
JOIN students
ON cohorts.id = students.cohort_id
group by cohorts.name
having count(students.*) >= 18
order by count(students.*);