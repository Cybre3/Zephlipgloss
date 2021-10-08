const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

module.exports = {
  get: {
    all: (req, res) => {
      let db_connect = dbo.getDb();
      db_connect
        .collection("users")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          res.json(result);
        });
    },
  },
  post: {
    save: (req, res) => {
      let db_connect = dbo.getDb();
      let myobj = {
        person_name: req.body.person_name,
        person_position: req.body.person_position,
        person_level: req.body.person_level,
      };
      db_connect.collection("users").insertOne(myobj, function (err, res) {
        if (err) throw err;
      });
    },
  },
};
