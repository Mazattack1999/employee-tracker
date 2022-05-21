// requrire mysql2
const mysql = require('mysql2');

// create connection to database
const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

// export database for use
module.exports = db;