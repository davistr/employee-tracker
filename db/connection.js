// Import dotenv for config file
require("dotenv").config();
// Import mysql
const mysql = require("mysql2");
// Create connection with environment variables
const connection = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;