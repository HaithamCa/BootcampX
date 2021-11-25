const { Pool } = require('pg');

const pool = new Pool({
  user: 'wlxkecza',
  password: 'wj3dz-4yxuwfkdBnR4LsDq122hO2TYeh', // '123'
  host: 'castor.db.elephantsql.com', //'localhost'
  database: 'wlxkecza', // BootcampX
  port: 5432
});

// const verb = process.argv[2];
const verb1 = process.argv[3];

pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
LIMIT ${verb1 || 5};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
}).catch(err => console.error('query error', err.stack));