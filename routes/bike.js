const { Router } = require('express');
const bikeRoute = Router();
const { BikeController } = require('../controllers');

bikeRoute.get("/", BikeController.listBike);
bikeRoute.get("/add", BikeController.createPage);
bikeRoute.post("/add", BikeController.createPost);
bikeRoute.get("/edit/:id", BikeController.editPage);
bikeRoute.post("/edit/:id", BikeController.editPost);
bikeRoute.get("/delete/:id", BikeController.remove);


module.exports = bikeRoute;