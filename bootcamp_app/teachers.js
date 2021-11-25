require('dotenv').config()

const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS, 
    host: process.env.DB_HOST, 
    database: process.env.DB_NAME, 
    port: process.env.DB_PORT
});

const verb = process.argv[2];
// const verb1 = process.argv[3];
const queryString = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
ORDER BY teacher;
`;

const cohortName = [ process.argv[2] || 'JUL02' ];

pool.query(queryString, cohortName)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
}).catch(err => console.error('query error', err.stack));