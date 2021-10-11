const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

module.exports = {
    get: {
      all: (req, res) => {
        let db_connect = dbo.getDb();
        db_connect
          .collection("carts")
          .find({})
          .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
          });
      },
      productById: (req, res) => {
        let db_connect = dbo.getDb();
        let myquery = { _id: ObjectId( req.params.id )};
        db_connect
          .collection("carts")
          .find(myquery)
          .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
          });
      }
    },
    
    post: {
        save: (req, res) => {
          console.log("I made it here");
          let db_connect = dbo.getDb();
          const { _id, name, price, quantity } = req.body;
    
          console.log(req.body);
    
          let myobj = {
            _id,
            name,
            price, 
            quantity,
          };
    
          console.log(myobj);
    
          db_connect.collection("carts").insertOne(myobj, function (err, res) {
            if (err) throw err;
          });
        },
    } 
}