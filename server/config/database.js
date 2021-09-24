const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("useCreateIndex", true); // Removes error "DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead."

module.exports = () => {
  return mongoose
    .connect("mongodb+srv://@cluster0.xwf5v.mongodb.net/?retryWrites=true&w=majority", {
      dbName: process.env.DATABASE_NAME,
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to db!"))
    .catch((error) => console.log("db connection failed: " + error));
};
