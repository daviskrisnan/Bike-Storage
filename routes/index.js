const route = require('express').Router();

route.get('/', (req,res) => {
    // res.json({
    //     message: "Bike Storage"
    // })
    res.render('index.ejs')
})

const customerRoutes = require('./customer');
route.use('/customers', customerRoutes);

const bikeRoutes = require('./bike');
route.use('/bikes', bikeRoutes);

const custbikeRoutes = require('./custbike');
route.use('/custbikes', custbikeRoutes);

module.exports = route;