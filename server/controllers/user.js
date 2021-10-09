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
    findUserByUsername: (req, res) => {
      let db_connect = dbo.getDb();
      console.log('from backend', req.body)
      let myquery = { username: req.body.email };

      db_connect.collection("users").findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
    },
  },
  
  post: {
    save: (req, res) => {
      let db_connect = dbo.getDb();
      const { email, password, phone } = req.body;

      console.log(req.body);

      let myobj = {
        username: email,
        password,
        phone,
      };

      console.log(myobj);

      db_connect.collection("users").insertOne(myobj, function (err, res) {
        if (err) throw err;
      });
    },
    login: (req, res, next) => {
      // res.cookie("token", req.token);
      console.log('token from backend', req.cookies)
      console.log('req.body from backend', req.body)
    }
  },
};
