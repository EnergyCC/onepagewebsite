const mysql = require("mysql");
const db = mysql.createConnection({
    host: "your_host",
    user: "database user",
    password: "database password",
    database: "database",
});

const PORT = 3003; // your port

module.exports = { db, PORT };
