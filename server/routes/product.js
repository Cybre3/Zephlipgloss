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

// Get only lip glosses, lip oils, and lip scrubs
recordRoutes.route("/lip-products").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection("products")
    .find({ $or: [ { category: "lip-gloss" }, { category: "lip-oil" }, { category: "lip-scrub" }] })
    .toArray(function (err, result) {
      if (err) throw err;
      let top3LipProducts = result.sort((a,b) => b.orders - a.orders).slice(0,3);
      res.json(top3LipProducts); // Send JSON of the top 3 lip products to the frontend
    });
});


// Get specific product
recordRoutes.route("/product/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
    .collection("products")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// /product/:id

module.exports = recordRoutes;