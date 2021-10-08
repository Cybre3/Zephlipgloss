const express = require("express");
const recordRoutes = express.Router();
const control = require('../controllers/index');

// Get all products
recordRoutes.route("/product").get(control.product.get.all);

// Get products on sale
recordRoutes.route("/sale").get(control.product.get.sale);

// Get only lip glosses, lip oils, and lip scrubs
recordRoutes.route("/lip-products").get(control.product.get.lipProducts);

// Get specific product
recordRoutes.route("/product/:id").get(control.product.get.productById);

module.exports = recordRoutes;