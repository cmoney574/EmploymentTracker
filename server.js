const { prompt } = require("inquirer");
const db = require("./db");
require("console.table");


function userPrompt(){
    prompt([
        {
            type: "list",
            name: "userChoice",
            choices: [
            {
                name: "View All Employees",
                value: "empView"
            },
            {
                name: "View All Roles",
                value: "roleView"
            },
            {
                name: "View All Departments",
                value: "depView"
            },
            {
                name: "Add an Employee",
                value: "empAdd"
            },
            {
                name: "Add a Role",
                value: "roleAdd"
            },
            {
                name: "Add a Department",
                value: "depAdd"
            },
            {
                name: "Update an Employee",
                value: "empUp"
            },
            {
                name: "Quit",
                value: "quit"
            }
            ]
        }
    ]).then(answer => {
        let choice = answer.userChoice;
        switch (choice) {
            case "empView":
                viewEmployees();
                break;
            case "roleView":
                viewRoles();
                break;
            case "depView":
                viewDepartments();
                break;
            case "empAdd":
                addEmployees();
                break;
            case "roleAdd":
                addRoles();
                break;
            case "depAdd":
                addDepartments();
                break;
            case "empUp":
                updateEmployees();
                break;
            default:
                console.log(choice)
                quit();
            }
    })
}

function viewRoles() {
    db.viewRoles()
    .then(([rows]) => {
        let employees = rows;
        console.table(employees);
      })
      .then(() => userPrompt());
}

function viewDepartments() {
    db.viewDepartments()
    .then(([rows]) => {
        let employees = rows;
        console.table(employees);
      })
      .then(() => userPrompt());
}

function viewEmployees() {
    db.viewEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.table(employees);
      })
      .then(() => userPrompt());
}

function addEmployees() {
    prompt([
        {
          name: "first_name",
          message: "First Name:"
        },
        {
          name: "last_name",
          message: "Last Name:"
        }
      ])
      .then(res => {
        let firstName = res.first_name;
        let lastName = res.last_name;

        db.viewRoles()
        .then(([rows]) => {
            let roles = rows;
            const rChoices = roles.map(({ id, title }) => ({
              name: title,
              value: id
            }));
            prompt({
                type: "list",
                name: "rId",
                message: "What is the employee's role?",
                choices: rChoices
              })
              .then(res =>{
                let employee = {
                    role_id: res.rId,
                    first_name: firstName,
                    last_name: lastName
                  }
                  db.addEmployee(employee);
              })
              .then(() => viewEmployees())
              .then(() => userPrompt())
            })
      })
}

function addRoles() {
    db.viewDepartments()
    .then(([rows]) =>{
        let departments = rows;
        const dChoices = departments.map(({ id, name }) => ({
          name: name,
          value: id
        }));
        prompt([
            {
                type: "input",
                name: "title",
                message: "Role Name:"
            },
            {
                type: "input",
                name: "salary",
                message: "Salary:"
            },
            {
                type: "list",
                name: "department_id",
                message: "Department:",
                choices: dChoices
            }
          ]).then(role => 
            db.addRole(role)
            .then(() => viewRoles())
            .then(() => userPrompt())
        )
    })
    
}

function addDepartments() {
    prompt([
        {
          name: "name",
          message: "Department Name:"
        }
      ])
        .then(res => {
          let name = res;
          db.addDepartment(name)
            .then(() => viewDepartments())
            .then(() => userPrompt())
        })
}

function updateEmployees() {
    db.viewEmployees()
    .then(([rows]) => {
      let currentEmp = rows;
      const eChoices = currentEmp.map(({ id, first_name, last_name }) => ({
        name: `${first_name} ${last_name}`,
        value: id
      }));
      prompt([
        {
          type: "list",
          name: "eId",
          message: "Employee to be Updated",
          choices: eChoices
        }
      ])
      .then(res => {
          let eId = res.eId;
          db.viewEmployees()
          .then(([rows]) => {
            let roles = rows;
            const rChoices = roles.map(({ id, title }) => ({
              name: title,
              value: id
            }));
            prompt([
              {
                type: "list",
                name: "rId",
                message: "What is the employee's new role?",
                choices: rChoices
              }
            ])
              .then(res => db.updateEmployee(res.rId, eId))
              .then(() => console.log("Updated employee's role"))
              .then(() => viewEmployees())
          });
      })
    })
}

function quit() {
    process.exit();
  }
userPrompt();