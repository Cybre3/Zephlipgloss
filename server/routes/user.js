const express = require("express");
const user = express.Router();
const control = require("../controllers/index");

// save user
user.route("/register").post(control.user.post.save);

// get all users
user.route("/user").get(control.user.get.all);


module.exports = user;