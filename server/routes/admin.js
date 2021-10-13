const express = require("express");
const adminRoutes = express.Router();
const control = require('../controllers/index');


// add a new product
adminRoutes.route('/admin/addNewProduct').post(control.admin.post.save)

// update product
adminRoutes.route('/admin/updateProduct/:id').post(control.admin.update.updateById)

// delete product
adminRoutes.route('/admin/deleteProduct/:id').delete(control.admin.delete.deleteById)