-- Use to pre-populate my database with employees and info
INSERT INTO departments (name)
VALUES ('Accounting'),
       ('HR'),
       ('IT'),
       ('Marketing'),
       ('Social Media');

INSERT INTO role (title, salary, department_id)
VALUES ('Executive Assistant', 40,000, 003),
       ('CEO', 150,000, 003),
       ('Head of Marketing', 95,000, 005),
       ('IT Analyst', 75,000, 001),
       ('Social Media Rep', 50,000, 002),
       ('Environmental Services', 45,000, 004),
       ('HR Rep', 80,000, 004);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Anthony', 'Baker', 1011, 1000),
       ('Clark' 'Davids', 2022, 2000),
       ('Douglas', 'Evans', 3033, 3000),
       ('Eric', 'Franklin', 4044, 4000),
       ('Fred', 'Gadd', 5055, 5000),
       ('Ginger', 'Hall', 6066, 6000),
       ('Haley', 'Igor', 7077, 7000);