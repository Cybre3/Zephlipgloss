const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');
require("dotenv").config();
const port = process.env.PORT || 5000;
const routes = require('./routes/index')


app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(routes.product);
app.use(routes.user);
app.use(routes.cart);

const dbo = require("./db/conn");

app.listen(port, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});