// TODO: Create an express server
const express = require('express');

const db = require('./db/index.js');

const cors = require('cors');

const morgan = require('morgan');

const app = express();

const port = 8080;

app.use(cors);
app.use(morgan);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// create get request for database
  // establish pathway
    // create querystr

    // invoke query method

app.get('/showall', (req, res) => {

  // let queryStr = `SELECT id, name, type, img FROM pokemon \
  // INNER JOIN images ON pokemon.typeNum = images.id \
  // INNER JOIN types ON pokemon.imageNum = types.id`;

  let queryStr = `SELECT * FROM pokemon`;

  db.query(queryStr, (err, results) => {
    if (err) {
      console.log('Error received from invoking query: ');
      res.status(404).send(err);
    } else {
      console.log('Successfully connected invoking query!');
      res.status(200).send(results);
    }
  })

})


app.listen(port, () => {
  console.log(`Listening on port: ${port}!`);
})

// EC MR PAP


// select id, name, type, img from pokemon \
// inner join images on pokemon.id = images.id\
// inner join type on images.id = type.id\