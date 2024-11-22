'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hedgehog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Hedgehog.init({
    name: DataTypes.STRING,
    github: DataTypes.STRING,
    spines: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Hedgehog',
  });
  return Hedgehog;
};