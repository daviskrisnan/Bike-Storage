'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bike.belongsToMany(models.customer, {through: models.custbike})
    }
  }
  bike.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    merk: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'bike',
  });
  return bike;
};