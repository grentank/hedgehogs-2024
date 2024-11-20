'use strict';

const { Favorite } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Favorite.bulkCreate([  // Favorite.destroy({where: { id: > 0 }})
      { userId: 1, messageId: 1 },
      { userId: 1, messageId: 2 },
      { userId: 1, messageId: 3 },
      { userId: 2, messageId: 4 },
      { userId: 3, messageId: 4 },
      { userId: 5, messageId: 4 },
      { userId: 3, messageId: 5 },
      { userId: 4, messageId: 6 },
      { userId: 5, messageId: 7 },
      { userId: 2, messageId: 7 },
      { userId: 3, messageId: 7 },
      { userId: 5, messageId: 8 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Favorites', null, {});
  },
};
