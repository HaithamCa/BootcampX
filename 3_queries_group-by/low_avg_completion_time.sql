SELECT students.name, avg(assignment_submissions.duration), avg(assignments.duration)
FROM students
JOIN assignment_submissions ON student_id = students.id
JOIN assignments ON assignments.id = assignment_id
where students.end_date is null
group by students.name
having avg(assignment_submissions.duration) < avg(assignments.duration)
order by avg(assignments.duration);
