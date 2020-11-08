const mysql = require('mysql');
const { host, user, password } = require('./config');

let con = mysql.createConnection({
    host,
    user,
    password
});

con.connect(err => {
    if (err) throw err;
    console.log('connected to database.');
});

module.exports = con;