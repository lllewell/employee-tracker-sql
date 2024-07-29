// import inquirer, build functions, and prompts here
const { prompt } = require('inquirer');
const { Pool } = require('pg');

// Connect to database
const pool = new Pool(
  {
    // Enter PostgreSQL username
    user: 'postgres',
    // Enter PostgreSQL password
    password: '',
    host: 'localhost',
    database: 'employees_db'
},
console.log('Connected to the courses_db database!')
)

pool.connect();

const viewAllDepartments = () => {
    return pool.query('SELECT * FROM departments');
};

const viewAllRoles = () => {
  return pool.query('SELECT * FROM role');
};

const viewAllEmployees = () => {
  return pool.query('SELECT * FROM employees');
};

const addDepartment = (name) => {
  return pool.query(`INSERT INTO departments (name) VALUES $1`, [name]);
};

const addRole = (name, salary, department_id) => {
  return pool.query(`INSERT INTO role (name, salary, department_id) VALUES $1`, [name, salary, department_id]);
};

const addEmployee = (employee) => {
  return pool.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES $1`, [first_name, last_name, role_id, manager_id]);
};

const updateEmployee = () => {
  let updatedRow = (answers.role_id)
  return pool.query(`UPDATE FROM employee WHERE id = $1`, [updatedRow]);

};

const logTable = (result) => {
  console.table(result.rows);
};

prompt([
  {
    type: 'list',
    message: 'What would you like to do?',
    name: 'initial',
    choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Updated An Employee'],
  }
])
  .then((answer) => {
    if (answer.initial === 'View All Departments'){
      return viewAllDepartments()
    } else if (answer.inital === 'View All Roles'){
      return viewAllRoles()
    }
  })
  .then(logTable)