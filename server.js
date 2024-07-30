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
  console.log('Connected to the employees_db database!')
)

client.connect();

const viewAllDepartments = () => {
  return client.query('SELECT * FROM departments');
};


const viewAllRoles = () => {
  return client.query('SELECT * FROM roles');
};

const viewAllEmployees = () => {
  return client.query('SELECT * FROM employees');
};

const addDepartment = () => {
  return prompt([
    {
      message: 'What is the name of your department?',
      name: 'name',
    }
  ]).then((answer) => {
    return client.query(
      `INSERT INTO departments (name) VALUES ($1)`,
      [answer.name]
    );
  }).then(viewAllDepartments)
};

const addRole = () => {
  return prompt([
    {
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
    }
  ]).then((answer) => {
    return client.query(`INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3)`, [answer.role, answer.salary, answer.department]);
  }).then(viewAllRoles)
};

const addEmployee = () => {
  return prompt([
    {
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
    }
  ]).then((answer) => {
    return client.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`, [answer.first_name, answer.last_name, answer.role_id, answer.manager_id]);
  }).then(viewAllEmployees)
};

const updateEmployee = () => {
  return prompt([
    {
      message: 'Which employee would you like to update?',
      name: 'updateName',
      choices: []
    }
  ]).then((answer) => {
    return client.query(`UPDATE FROM employee WHERE id = $1`, [answer.updateName]);
  }).then(viewAllEmployees)

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
        return addDepartment().then(viewAllDepartments).then(logTable).then(init)
      } else if (answer.type === 'Add Role') {
        return addRole().then(viewAllRoles).then(logTable).then(init)
      } else if (answer.type === 'Add Employee') {
        return addEmployee().then(viewAllEmployees).then(logTable).then(init)
      } else if (answer.type === 'Update Employee') {
        return updateEmployee().then(viewAllEmployees).then(logTable).then(init)
      } else {
        process.exit();
      }
    })

};
// Need to reinitialize the type prompts again somehow

init();
