const { Pool } = require('pg');

const pool = new Pool({
  user: 'wlxkecza',
  password: 'wj3dz-4yxuwfkdBnR4LsDq122hO2TYeh', // '123'
  host: 'castor.db.elephantsql.com', //'localhost'
  database: 'wlxkecza', // BootcampX
  port: 5432
});

const verb = process.argv[2];
// const verb1 = process.argv[3];

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = '${process.argv[2] || 'JUL02'}'
ORDER BY teacher;
`)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
}).catch(err => console.error('query error', err.stack));