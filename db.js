const database = require('mysql2')
//connect to database
 const connection = database.createConnection({
    host: "localhost",
    user: "root",
    password: "Mohamed@1998",
    database: "cv_builder",
  });

  module.exports = connection;
