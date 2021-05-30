// TODO: Create an express server
const express = require('express');

const db = require('./db/index.js');

const path = require('path');

const cors = require('cors');

const morgan = require('morgan');

const app = express();

const port = 3000;

// EECME <-- acronym tip
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// needs to be invoked
app.use(cors());
// needs to pass 'dev' as input
app.use(morgan('dev'));

// connects server to client (static files)
app.use(express.static(path.join(__dirname, '../client/dist')));

// create get request for database
  // establish pathway
    // create querystr

    // invoke query method

app.get('/showall', (req, res) => {

  let queryStr = `SELECT pokemon.id, pokemon.name, images.img, types.type FROM pokemon
  INNER JOIN images ON pokemon.imageNum = images.id
  INNER JOIN types ON pokemon.typeNum = types.id`;

  // let queryStr = `SELECT * FROM pokemon`;

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