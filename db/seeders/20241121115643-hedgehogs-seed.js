'use strict';

const fs = require('fs').promises;
const { Hedgehog } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = await fs.readFile('./db/seedData/students.txt', 'utf8');
    await Hedgehog.bulkCreate(
      data.split('\n').map((row) => ({
        name: row.split('\t')[0],
        github: row.split('\t')[1],
        spines: Math.floor(Math.random() * 2001) + 5000,
      })),
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
