const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;
const jwt = require("jsonwebtoken");

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
      console.log("from backend", req.params);
      let myquery = { username: req.params.email };

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
    login: async (req, res) => {
      const { dbUser, passMatch } = req.body;
      // res.cookie("token", req.token);
      // console.log('token from backend', req.cookies)
      if(!passMatch) return console.log('Password did not match');

      res.token = jwt.sign({ _id: dbUser._id }, process.env.SECRET_KEY);
      console.log("req.body from backend", req.body);

      // { httpOnly: true, maxAge: maxAge * 1000 }


      res.cookie('token', res.token);

      res.json(res.token)
    },
  },
};
