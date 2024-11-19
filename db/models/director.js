'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Director extends Model {
    static associate({ Movie }) {
      this.hasMany(Movie, { foreignKey: 'directorId' });
    }
  }
  Director.init(
    {
      name: DataTypes.STRING,
      style: DataTypes.TEXT,
      country: DataTypes.STRING(30),
      born: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Director',
    },
  );
  return Director;
};
