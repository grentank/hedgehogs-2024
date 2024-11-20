'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate({ User, Message }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Message, { foreignKey: 'messageId' });
    }
  }
  Favorite.init(
    {
      userId: DataTypes.INTEGER,
      messageId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Favorite',
    },
  );
  return Favorite;
};
