const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000;
const cors = require('cors')
const bodyParser = require('body-parser')
const connection = require('./db');

//configure cors
app.use(cors());

//configure cors
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
  });

  app.listen(PORT, () => {
    console.log("Server running on port:+" + PORT);
  });