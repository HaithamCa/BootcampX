select cohorts.name, avg(assistance_requests.completed_at - assistance_requests.started_at)
from students
join assistance_requests on students.id = assistance_requests.student_id
join cohorts on cohorts.id = students.cohort_id
group by cohorts.name
order by avg(assistance_requests.completed_at - assistance_requests.started_at);