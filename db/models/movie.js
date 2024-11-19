'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate({ Director }) {
      this.belongsTo(Director, { foreignKey: 'directorId' }); // references
    }
  }
  Movie.init(
    {
      title: DataTypes.STRING,
      genre: DataTypes.STRING,
      releaseYear: DataTypes.INTEGER,
      hasOscar: DataTypes.BOOLEAN,
      directorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Movie',
    },
  );
  return Movie;
};
