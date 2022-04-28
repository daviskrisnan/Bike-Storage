const { customer, custbike, bike } = require('../models');

class CustomerController {
    static async listCustomer(req,res) {
        try {
            let customers = await customer.findAll({
                order: [
                    ['id', 'asc']
                ]
            })
            // res.json(customers)
            res.render('customerPage.ejs', {customers})
        }catch(err) {
            res.json(err)
        }
    }
    static createPage(req,res) {
        res.render('customerAddPage.ejs', {customer})
    }
    static async createPost(req,res) {
        try {
            const { name, address, phone, start_storage, end_storage, nopol } = req.body

            let result = await customer.create({
                name, address, phone, start_storage, end_storage, nopol 
            })
            // res.json(result)
            res.redirect('/customers')
        }catch(err) {
            res.json(err)
        }
    }
    static editPage(req,res) {
        res.render('customerEditPage.ejs', {customer})
    }
    static async editPost(req,res) {
        try {
            const id = +req.params.id;
            const { name, address, phone, start_storage, end_storage, nopol } = req.body;

            let result = await customer.update({
                name, address, phone, start_storage, end_storage, nopol
            }, {
                where: {id}
            })

            result[0] === 1 ?
            res.json({
                message: `Customer with id ${id} has been updated..`
            }) :
            res.json({
                message: `Customer with id ${id} could not been updated..`
            })
        }catch(err) {
            res.json(err)
        }
    }
    static async remove(req,res) {
        try {
            const id = +req.params.id;
            
            let result = await customer.destroy({
                where: { id }
            })
            res.redirect('/customers')
        }catch(err) {
            res.json(err)
        }
    }

    static async getJunction(req, res) {
        try {
            const id = +req.params.id;

            let result = await custbike.findAll({
                where: {
                    customerId: id
                },
                include: [customer, bike]
            })

            let resultJunction = {};
            let bikes = [];

            if (result.length === 0) {
                result = await customer.findByPk(id);
                resultJunction = {
                    ...result.dataValues, bikes
                }
            } else {
                bikes = result.map(dv => {
                    return dv.bikes.dataValues
                })
                resultJunction = {
                    ...result[0].product.dataValues, bikes
                }
            }
            res.render('infoCustomer.ejs', {junction: resultJunction})
        } catch(err) {
            res.json(err)
        }
    }

}

module.exports = CustomerController;