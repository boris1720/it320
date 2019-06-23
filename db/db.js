var mysql      = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'rene_vegan_db',
    password : 'MpbKPCyfuR2ZCs1U',
    database : 'rene_vegan_db'
});

connection.connect();

module.exports = connection;