const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
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
    console.log("viewRole")
}

function viewDepartments() {
    console.log("viewDep")
    db.viewDepartments()
    .then(([rows]) => {
        let employees = rows;
        console.log("\n");
        console.table(employees);
      }).then(() => userPrompt());
}

function viewEmployees() {
    console.log("viewEmp");
    db.viewEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.log("\n");
        console.table(employees);
      }).then(() => userPrompt());
}

function addEmployees() {

}

function addRoles() {

}

function addDepartments() {

}

function updateEmployees() {

}

function quit() {
    process.exit();
  }
userPrompt();