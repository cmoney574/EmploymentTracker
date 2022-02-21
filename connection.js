const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "wordpass",
  database: "employees"
});

module.exports = connection;
