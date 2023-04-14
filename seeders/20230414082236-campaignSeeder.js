'use strict';

const { faker } = require('@faker-js/faker');
const { Campaign } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up () {
    const campaigns = [];

    // Generate 10 campaign records
    for (let i = 0; i < 20; i++) {
      const campaign = {
        name: faker.company.companyName(),
        description: faker.lorem.paragraph(),
        goal_amount: faker.random.numeric(4),
      };
      campaigns.push(campaign);
    }

    await Campaign.bulkCreate(campaigns);
  },

  async down () {
    await Campaign.destroy({ where: {} });
  }
};
