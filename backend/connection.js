const mysql = require('mysql');
const { host, user, password, db_port, database } = require('./config');

let con = mysql.createPool({
    host,
    user,
    password,
    database,
    port: db_port,
    connectionLimit: 10,
    timezone: 'utc',
    multipleStatements: true, 
    charset : 'utf8'
});

module.exports = con;