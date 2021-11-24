select cohorts.name, sum(assistance_requests.completed_at - assistance_requests.started_at) as total_duration
from students join assistance_requests
on students.id = assistance_requests.student_id
join cohorts 
on cohorts.id = students.cohort_id
group by cohorts.name
order by total_duration;