const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'local',
    user:'root',
    database:'node-complete',
    password:'VSIJ@0987mysql'

});

module.exports = pool.promises();
