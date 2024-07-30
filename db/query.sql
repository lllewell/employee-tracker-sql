-- Do we need a query.sql folder? If not how do we join all the foreign and primary keys?
SELECT *
FROM role
JOIN departments ON role.department_id = departments.id;

SELECT *
FROM employees
JOIN roles ON employees.role_id = roles.id;

SELECT *
FROM employees
JOIN employees on employees.manager_id = employees.id;
