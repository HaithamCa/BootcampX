SELECT students.name, avg(assignment_submissions.duration)
FROM assignment_submissions 
JOIN students
ON assignment_submissions.student_id = students.id
WHERE students.end_date is null
group by students.name
order by avg(assignment_submissions.duration) DESC;
