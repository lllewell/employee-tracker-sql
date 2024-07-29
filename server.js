// import inquirer, build functions, and prompts here
const { prompt } = require('inquirer');
const { Client } = require('pg');

// Connect to database
const client = new Client(
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

client.connect();

const viewAllDepartments = () => {
  return client.query('SELECT * FROM departments');
};

// const selectViewAllDepartments = () => {
//   const type = {
//     type: 'list',
//     message: 'What would you like to do?',
//     name: 'department',
//     choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Updated An Employee'],
//   };
//   return prompt(type);
// }

const viewAllRoles = () => {
  return client.query('SELECT * FROM roles');
};

const viewAllEmployees = () => {
  return client.query('SELECT * FROM employees');
};

const addDepartment = () => {
  return prompt({
    message: 'What is the name of your department?',
    name: 'name',
  }).then((answer) => {
    return client.query(
      `INSERT INTO departments (name) VALUES ($1)`,
      [answer.name],
    );
  });
};

const addRole = () => {
  return prompt({
    message: 'What role would you like to add?',
    name: 'role',
  },
  {
    message: 'What is the salary for this role?',
    name: 'salary',
  },
  {
    message: 'What is the department number for this role?',
    name: 'department'
  }).then((answer) => {
    return client.query(`INSERT INTO roles (title, salary, department_id) VALUES ($1)`, [answer.role, answer.salary, answer.department]);
  })
};

const addEmployee = (employee) => {
  return client.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES $1`, [first_name, last_name, role_id, manager_id]);
};

const updateEmployee = () => {
  let updatedRow = (answer.role_id)
  return client.query(`UPDATE FROM employee WHERE id = $1`, [updatedRow]);

};

const logTable = (result) => {
  console.table(result.rows);
};

const init = () => {
  prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'type',
      choices: [
        'View All Departments',
        'View All Roles',
        'View All Employees',
        'Add Department',
        'Add Role',
        'Add Employee',
        'Update Employee',
        'Exit',
      ],
    }
  ])
    .then((answer) => {
      if (answer.type === 'View All Departments') {
        return viewAllDepartments().then(logTable).then(init)
      } else if (answer.type === 'View All Roles') {
        return viewAllRoles().then(logTable).then(init)
      } else if (answer.type === 'View All Employees') {
        return viewAllEmployees().then(logTable).then(init)
      } else if (answer.type === 'Add Department') {
        return addDepartment().then(init)
      } else if (answer.type === 'Add Role') {
        return addRole().then(init)
      } else {
        process.exit();
      }
    })

};
// Need to reinitialize the type prompts again somehow

init();
