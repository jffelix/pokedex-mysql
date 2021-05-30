// TODO: Establish connection to mysql database
const mysql = require('mysql');

const db = mysql.createConnection({

  host: 'localhost',
  user: 'root',
  database: 'pokedex',
  password: 'password'

})

db.connect((err, results) => {
  if (err) {
    console.log('Error received at db: ', err);
    return;
  } else {
    console.log('Successfully connected at db!');
  }
})

module.exports = db;