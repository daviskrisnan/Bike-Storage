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
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          messsage: "Name can not be empty"
        }
      }
    },
    type: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          messsage: "Name can not be empty"
        }
      }
    },
    merk: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          messsage: "Name can not be empty"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'bike',
  });
  return bike;
};