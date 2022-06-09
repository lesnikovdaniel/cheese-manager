'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cheese extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cheese.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    metricId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cheese',
  });
  return Cheese;
};