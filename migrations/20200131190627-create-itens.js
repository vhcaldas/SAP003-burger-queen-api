'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('itens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_product: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {models: 'products', key:'id'},
      },
      id_orders: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {models: 'orders', key:'id'},
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      options: {
        type: Sequelize.STRING
      },
      id_extras: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {models: 'products', key:'id'},
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('itens');
  }
};