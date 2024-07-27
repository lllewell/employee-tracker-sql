// import inquirer, build functions, and prompts here
const express = require('express');
const { createPromptModule } = require('inquirer');
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

const prompt = createPromptModule();

const viewAllDepartments = () => {
    return pool.query('SELECT id, name FROM departments');
};

const viewAllRoles = () => {

};

const viewAllEmployees = () => {

};

const addDepartment = () => {

};

const addRole = () => {

};

const addEmployee = () => {

};

const updateEmployee = () => {

};