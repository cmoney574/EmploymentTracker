const connection = require("../connection");

class DB {
    constructor(connection) {
        this.connection = connection;
      }

      viewEmployees() {
        return this.connection.promise().query(
            "SELECT * FROM employee;"
        );
      }

      viewDepartments() {
        return this.connection.promise().query(
            "SELECT * FROM department;"
        );
      }

      viewRoles() {
        return this.connection.promise().query(
            "SELECT * FROM role;"
        );
      }

      addRole(role){
        return this.connection.promise().query("INSERT INTO role SET ?", role);
      }

      addEmployee(employee){
        return this.connection.promise().query("INSERT INTO employee SET ?", employee);
      }

      addDepartment(department) {
        return this.connection.promise().query("INSERT INTO department SET ?", department);
      }

      updateEmployee(rId, eId) {
        return this.connection.promise().query(
          "UPDATE employee SET role_id = ? WHERE id = ?",
          [rId, eId]
        );
      }
}

module.exports = new DB(connection);