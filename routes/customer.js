const { Router } = require('express');
const customerRoute = Router();
const { CustomerController } = require('../controllers');

customerRoute.get("/", CustomerController.listCustomer);
customerRoute.get("/add", CustomerController.createPage);
customerRoute.post("/add", CustomerController.createPost);
customerRoute.get("/edit/:id", CustomerController.editPage);
customerRoute.post("/edit/:id", CustomerController.editPost);
customerRoute.get("/delete/:id", CustomerController.remove);
customerRoute.get("/:id/bikes", CustomerController.getJunction);


module.exports = customerRoute;