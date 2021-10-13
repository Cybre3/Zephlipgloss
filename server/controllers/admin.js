const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

module.exports = {
  post: {
    save: (req, res) => {
      let db_connect = dbo.getDb();
      const { name, price, image, category, sale } = req.body;

      console.log(req.body);

      let myobj = {
        username: name,
        price,
        image,
        category,
        sale,
      };

      console.log(myobj);

      db_connect.collection("users").insertOne(myobj, function (err, res) {
        if (err) throw err;
      });
    },
  },

  update: {
    updateById: (req, res) => {
      let db_connect = dbo.getDb();
      let myquery = { id: req.body.id };
      let newvalues = {
        $set: {
          person_name: req.body.person_name,
          person_position: req.body.person_position,
          person_level: req.body.person_level,
        },
      };
      db_connect.collection("products").updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
      });
    },
  },

  delete: {
    deleteById: (req, res) => {
      let db_connect = dbo.getDb();
      let myquery = { id: req.body.id };

      db_connect.collection("products").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
      });
    },
  },
};
