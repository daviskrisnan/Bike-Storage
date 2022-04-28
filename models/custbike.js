'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class custbike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      custbike.belongsTo(models.bike)
      custbike.belongsTo(models.customer)
    }
  }
  custbike.init({
    customerId: DataTypes.INTEGER,
    bikeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'custbike',
  });
  return custbike;
};