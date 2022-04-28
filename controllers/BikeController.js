const { bike } = require('../models');

class BikeController {
    static async listBike(req,res) {
        try {
            let bikes = await bike.findAll({
                order: [
                    ['id', 'asc']
                ]
            })
            // res.json(bikes)
            res.render('bikePage.ejs', {bikes})
        }catch(err) {
            res.json(err)
        }
    }
    static createPage(req,res) {
        res.render('bikeAddPage.ejs', {bike})
    }
    static async createPost(req,res) {
        try {
            const { name, type, merk } = req.body

            let result = await bike.create({
                name, type, merk
            })
            // res.json(result)
            res.redirect('/bikes')
        }catch(err) {
            res.json(err)
        }
    }
    static editPage(req,res) {
        res.render('bikeEditPage.ejs', {bike})
    }
    static async editPost(req,res) {
        try {
            const id =+req.params.id;
            const { name, type, merk } = req.body;

            let result = await bike.update({
                name, type, merk
            }, {
                where: {id}
            })

            result[0] === 1 ?
            res.json({
                message: `Bike with id ${id} has been updated..`
            }) :
            res.json({
                message: `Bike with id ${id} could not been updated..`
            })
        } catch(err) {
            res.json(err)
        }
    }
    static async remove(req,res) {
        try {
            const id = +req.params.id;

            let result = await bike.destroy({
                where: {id}
            })
            res.redirect('/bikes')
        } catch(err) {
            res.json(err)
        }
    }
}

module.exports = BikeController;