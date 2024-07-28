-- Do we need a query.sql folder? If not how do we join all the foreign and primary keys?
SELECT *
FROM role
JOIN departments ON role.department_id = departments.id;

SELECT *
FROM employee
JOIN role ON employee.role_id = role.id;

SELECT *
FROM employee
JOIN employee on employee.manager_id = employee.id;
