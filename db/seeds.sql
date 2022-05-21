INSERT INTO department (name)
VALUES
('Engineering'),
('Communications'),
('HR'),
('Customer Service'),
('Mail');

INSERT INTO role (title, salary, department_id)
VALUES
('Manager', 100000, 2),
('Engineer', 80000, 1),
('Manager', 50000, 3),
('Customer Service', 45000, 4),
('Mail Handler', 20000.0, 5),
('Manager', 100000, 3),
('Engineer', 80000, 4),
('Manager', 50000, 1),
('Customer Service', 45000, 2),
('Mail Handler', 20000.0, 4),
('Manager', 100000, 3),
('Engineer', 80000, 2),
('Manager', 50000, 5),
('Customer Service', 45000, 4),
('Mail Handler', 20000.0, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Smith', 1, 2),
('Jane', 'Doe', 2, 2),
('Peter', 'Douglas', 3, 1),
('Sarah', 'Foster', 4, 3),
('Aaron', 'Johnson', 5, 3),
('Hannah', 'Osborne', 6, 1),
('Mike', 'Scott', 7, 5),
('Dwite', 'Shrewt', 8, 4),
('Jym', 'Halbert', 9, 4),
('Pamm', 'Beezly', 10, 4),
('Kevin', 'Kevin', 11, 5);