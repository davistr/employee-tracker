INSERT INTO department
    (department_name)
VALUES
    ('Accounting'),
    ('Engineering'),
    ('Legal'),
    ('Operations'),
    ('Sales');

INSERT INTO job_role
    (title, salary, department_id)
VALUES
    ('Staff Accountant', 60000.00, 1), 
    ('Controller', 175000.00, 1),
    ('Engineer', 80000.00, 2), 
    ('Senior Engineer', 100000.00, 2), 
    ('Lawyer', 150000.00, 3), 
    ('Legal Team Lead', 200000.00, 3),
    ('Operations Manager', 90000.00, 4), 
    ('Sales Associate', 75000.00, 5), 
    ('Sales Lead', 120000.00, 5); 
    
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Aaron', 'Jones', 1, 1),
    ('Jim', 'Jones', 2, 1),
    ('Sam', 'Snyder', 4, NULL),
    ('Jennifer', 'Law', 5, 3),
    ('Taylor', 'Kelly', 1, 1),
    ('Kate', 'Johnson', 3, 2),
    ('Barbara', 'Tate', 6, NULL),
    ('Mike', 'Green', 8, 5),
    ('Sarah', 'Carr', 8, 5),
    ('John', 'Brown', 9, NULL),
    ('Casey', 'Keller', 7, NULL);
    

