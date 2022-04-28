const { custbike, customer, bike } = require('../models');

class CustBikeController {
    static async list(req,res) {
        try {
            let custbikes = await custbike.findAll({
                include: [customer, bike],
                order: [
                    ['id', 'asc']
                ],
                attributes: {
                    include: ['id']
                }
            })
            // res.json(custbikes)
            res.render('infoCustomer.ejs', {custbikes})
        } catch(err) {
            res.json(err)
        }
    }
    static createPage(req,res) {
        res.render('infoAddPage.ejs', {custbike})
    }
    static async createPost(req,res) {
        try {
            const { customerId, bikeId } = req.body;
            
            let result = await custbike.create({
                customerId: +customerId,
                bikeId: +bikeId
            })

            // console.log(req.body)
            // res.json(result)
            res.redirect('/custbikes')
        } catch(err) {
            res.json(err)
        }
    }
}

module.exports = CustBikeController;