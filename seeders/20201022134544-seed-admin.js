'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    let seedAdmin = [
      {
        nama_seller: 'admin',
        username: 'admin',
        password: '1234',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_seller: 'admin1',
        username: 'admin1',
        password: '1234',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_seller: 'admin2',
        username: 'admin2',
        password: '1234',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    return queryInterface.bulkInsert('Admins', seedAdmin, {});
  },

  down:  (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Admins', null, {});
  }
};
