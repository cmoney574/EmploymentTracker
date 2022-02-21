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
}

module.exports = new DB(connection);