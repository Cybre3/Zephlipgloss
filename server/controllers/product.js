const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

module.exports = {
  get: {
    all: (req, res) => {
      let db_connect = dbo.getDb();
      db_connect
        .collection("products")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          res.json(result);
        });
    },
    sale: (req, res) => {
      let db_connect = dbo.getDb();
      db_connect
        .collection("products")
        .find({ sale: true })
        .toArray(function (err, result) {
          if (err) throw err;
          res.json(result);
        });
    },
    lipProducts: (req, res) => {
      let db_connect = dbo.getDb();
      db_connect
        .collection("products")
        .find({ $or: [ { category: "lip-gloss" }, { category: "lip-oil" }, { category: "lip-scrub" }] })
        .toArray(function (err, result) {
          if (err) throw err;
          let top3LipProducts = result.sort((a,b) => b.orders - a.orders).slice(0,3);
          res.json(top3LipProducts); // Send JSON of the top 3 lip products to the frontend
        });
    },
    productById: (req, res) => {
      let db_connect = dbo.getDb();
      let myquery = { _id: ObjectId( req.params.id )};
      db_connect
        .collection("products")
        .find(myquery)
        .toArray(function (err, result) {
          if (err) throw err;
          res.json(result);
        });
    }
  },
  
  post: {},  
}