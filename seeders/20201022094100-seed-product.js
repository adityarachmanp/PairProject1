'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let seedProduct = [
      {
        name: 'kaos',
        qty: 10,
        price: 10000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'celana',
        qty: 10,
        price: 100000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'jaket',
        qty: 10,
        price: 150000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    return queryInterface.bulkInsert('Products', seedProduct, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
