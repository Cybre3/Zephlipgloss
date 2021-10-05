const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

// Get all products
recordRoutes.route("/product").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection("products")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// Get products on sale
recordRoutes.route("/sale").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection("products")
    .find({ sale: true })
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

module.exports = recordRoutes;