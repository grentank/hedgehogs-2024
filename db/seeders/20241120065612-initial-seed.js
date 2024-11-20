'use strict';

const { User, Message } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      { name: 'Alex', tag: '@devastator' },
      { name: 'Masha', tag: '@CoolBaby777' },
      { name: 'Амирхан', tag: '@han95' },
      { name: 'Sasha', tag: '@sasha' },
      { name: 'Pasha', tag: '@pasha' },
    ]);
    await Message.bulkCreate([
      { body: 'Всем привет!', authorId: 1 },
      { body: 'Завтра на митап', authorId: 1 },
      { body: 'я приболел =(((', authorId: 2 },
      { body: '+2 балла', authorId: 1 },
      { body: 'а я переезжаю', authorId: 3 },
      { body: 'Всем добра!', authorId: 5 },
      { body: 'Всем пока!', authorId: 4 },
      { body: 'Всем пока!', authorId: 1 },
      { body: '+1', authorId: 5 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Messages', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  },
};
