'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MetricItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MetricItem.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    normalValue: DataTypes.STRING,
    status: DataTypes.STRING,
    documentPath: DataTypes.STRING,
    metricId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MetricItem',
  });
  return MetricItem;
};