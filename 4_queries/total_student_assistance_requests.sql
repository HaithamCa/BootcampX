select count(assistance_requests.*),
 students.name 
 from assistance_requests 
 join students
 on students.id = assistance_requests.student_id
 where students.name = 'Elliot Dickinson'
 group by students.name;