var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'blitz.cs.niu.edu',
  user: 'student',
  password: 'student',
  database: 'csci467'
});

connection.connect();

module.exports = {
    getAll: async result => {
        var list = connection.query('SELECT * FROM customers', function(err, rows){
            if (err) throw err;
            console.log('rows: ', rows);
            result(rows);
        });
    }
}