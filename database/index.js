const mysql = require('mysql');

// TODO: establish connection
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'airwalk1',
  database : 'ReviewDB'
});

connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Connected!');
  }
});

module.exports = connection;