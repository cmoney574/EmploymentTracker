const  {prompt}  = require("inquirer");

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
            }
            ]
        }
    ])
}
userPrompt();