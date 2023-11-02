const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("./db");
const sectionsRouter = require("./apis/sections");
const levelsRouter = require("./apis/levels");

//configure cors
app.use(cors());

//configure cors
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Check database connection
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

//Apis
app.use("/api/sections", sectionsRouter);
app.use("/api/levels", levelsRouter);

app.listen(PORT, () => {
  console.log("Server running on port: " + PORT);
});