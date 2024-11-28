'use strict';

const { Hedghehog } = require('../models');
const fs = require('fs').promises;
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = await fs.readFile('./db/students.txt', 'utf8');
    await Hedghehog.bulkCreate(
      data.split('\n').map((row) => ({
        name: row.split('\t')[0],
        github: row.split('\t')[1],
        bonus: Math.floor(Math.random() * 10),
      })),
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Hedghehogs', null, {});
  },
};
