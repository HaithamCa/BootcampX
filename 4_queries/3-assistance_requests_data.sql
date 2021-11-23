select teachers.name, students.name, assignments.name
(select (completed_at - started_at) from assistance_requests),
from assistance_requests 
join teachers on teachers.id = assistance_requests.teacher_id 
join students on students.id = assistance_requests.students_id
ORDER BY duration;