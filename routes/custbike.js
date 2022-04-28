const { Router } = require('express');
const custbikeRoute = Router();
const { CustBikeController } = require('../controllers');

custbikeRoute.get("/", CustBikeController.list);
custbikeRoute.get("/add", CustBikeController.createPage);
custbikeRoute.post("/add", CustBikeController.createPost);


module.exports = custbikeRoute;