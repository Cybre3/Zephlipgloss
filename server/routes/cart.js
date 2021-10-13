const express = require("express");
const cartRoutes = express.Router();
const control = require('../controllers/index');

// Get all products
cartRoutes.route("/shopping-cart").get(control.cart.get.all);

// Insert product into cart
cartRoutes.route("/shopping-cart").post(control.cart.post.save);

module.exports = cartRoutes;