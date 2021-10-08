const express = require("express");
const recordRoutes = express.Router();
const control = require('../controllers/index');

// save user
recordRoutes.route("/register").post(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection("products")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});