-- Use to pre-populate my database with employees and info
INSERT INTO departments (name)
VALUES ('Accounting'),
       ('Administrative'),
       ('IT'),
       ('Marketing'),
       ('Social Media');

INSERT INTO role (title, salary, department_id)
VALUES ('Accountant', 80000, 1),
       ('CEO', 150000, 2),
       ('Head of Marketing', 95000, 4),
       ('IT Analyst', 75000, 3),
       ('Social Media Rep', 50000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
-- Make sure to add manager_id in INSERT INTO and values after you troubleshoot
VALUES ('Anthony', 'Baker', 1, 1000),
       ('Clark', 'Davids', 2, 2000),
       ('Douglas', 'Evans', 3, 3000),
       ('Eric', 'Franklin', 4, 4000),
       ('Fred', 'Gadd', 5, 5000);
       