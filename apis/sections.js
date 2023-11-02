const express = require("express");
const connection = require('../db.js'); // Assuming you have a separate file for your database connection

const levelsRouter = express.Router();

const handleSections = {
  getSections:(req, res) => {
    const sql = "SELECT * FROM SECTIONS";
    connection.query(sql, (err, result) => {
      if (err) return res.json({ message: err.message });
      console.log(result)
      return res.json(result);
    });
  }
}

levelsRouter.get("/", handleSections.getSections);


module.exports = levelsRouter;