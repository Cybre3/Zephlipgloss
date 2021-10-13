const express = require("express");
const user = express.Router();
const control = require("../controllers/index");

// get all users
user.route("/user").get(control.user.get.all);
// get user by id
user.route("/user/:email").get(control.user.get.findUserByUsername);

// save user
user.route("/register").post(control.user.post.save);
// login user
user.route("/login").post(control.user.post.login);


// logout user
user.route('/logout').delete(control.user.delete.logout);



module.exports = user;