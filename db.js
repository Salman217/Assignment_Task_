

const mysql = require('mysql');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',        
  user: 'root',         
  password: 'Salman@12345',     
  database: 'UserTask'     
});

module.exports = connection;