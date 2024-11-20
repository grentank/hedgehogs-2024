'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Message, Favorite, Rating }) {
      this.hasMany(Message, { foreignKey: 'authorId', as: 'messages' });
      this.hasMany(Favorite, { foreignKey: 'userId' });
      this.belongsToMany(Message, {
        through: Favorite,
        foreignKey: 'userId',
        otherKey: 'messageId',
        as: 'favorites',
      });
      this.belongsToMany(Message, {
        through: Rating,
        foreignKey: 'userId',
        otherKey: 'messageId',
        as: 'rates',
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      tag: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
