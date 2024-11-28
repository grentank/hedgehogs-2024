'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hedghehog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Hedghehog.init({
    name: DataTypes.STRING,
    github: DataTypes.STRING,
    bonus: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Hedghehog',
  });
  return Hedghehog;
};