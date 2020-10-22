'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let seedCustomer = [
      {
        name: 'atian',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'jundana',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'adit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]

    return queryInterface.bulkInsert('Customers', seedCustomer, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Customers', null, {});
  }
};