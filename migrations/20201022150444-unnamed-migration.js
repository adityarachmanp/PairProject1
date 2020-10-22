'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Customers', 'password', Sequelize.STRING);
  },  

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Customers', 'password');
  }
};
