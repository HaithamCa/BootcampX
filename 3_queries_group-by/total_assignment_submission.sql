SELECT cohorts.name, count(assignment_submissions.*)
FROM assignment_submissions
JOIN students 
ON assignment_submissions.student_id = students.id
JOIN cohorts 
ON students.cohort_id = cohorts.id
group by cohorts.name
order by  count(assignment_submissions.*) DESC;