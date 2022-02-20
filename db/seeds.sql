use employees;

INSERT INTO department (name)
VALUES ("State"), ("Treasury"), ("Defense");

INSERT INTO role (title, salary, department_id)
VALUES ("Secretary of State", 200000, 1), ("Secretary of Treasury", 200000, 2), ("Secretary of Defense", 200000, 3),
("Diplomat", 80000, 1), ("Accountant", 90000, 2), ("General", 100000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Antony", "Blinken", 1, NULL), ("Janet", "Yellen", 2, NULL), ("Loyd", "Austin", 3, NULL),
("SARAH", "STOREY", 4, 1), ("Wally", "Adeyemo", 5, 2), ("Mark", "Milley", 6, 3);