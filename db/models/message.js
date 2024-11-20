'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate({ User, Favorite, Rating }) {
      this.belongsTo(User, { foreignKey: 'authorId', as: 'author' });
      this.hasMany(Favorite, { foreignKey: 'messageId' });
      this.belongsToMany(User, {
        through: Favorite,
        foreignKey: 'messageId',
        otherKey: 'userId',
        as: 'favoritedByUsers',
      });
      this.belongsToMany(User, {
        through: Rating,
        foreignKey: 'messageId',
        otherKey: 'userId',
        as: 'ratedByUsers',
      });
    }
  }
  Message.init(
    {
      body: DataTypes.TEXT,
      authorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Message',
    },
  );
  return Message;
};
