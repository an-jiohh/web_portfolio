const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PSWORD,
  database: process.env.DB_DATABASE,
});

db.connect(); //메소드로 요청을 연결

module.exports = db;
