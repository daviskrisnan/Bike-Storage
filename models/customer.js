'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      customer.belongsToMany(models.bike, {through: models.custbike})
    }
  }
  customer.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    start_storage: DataTypes.DATEONLY,
    end_storage: DataTypes.DATEONLY,
    nopol: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'customer',
  });
  return customer;
};