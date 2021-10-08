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
    }
  },
  post: {},  
}