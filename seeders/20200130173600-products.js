'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
    */

    return queryInterface.bulkInsert('products', [
      {
        name: 'Anéis de Cebola',
        price: 5,
        type: product,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Batata Frita',
        price: 5,
        type: product,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Café Americano',
        price: 5,
        type: product,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Café com Leite',
        price: 7,
        type: product,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hambúrguer Duplo',
        price: 15,
        type: product,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hambúrguer Simples',
        price: 10,
        type: product,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Misto Quente',
        price: 10,
        type: product,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Refrigerante 500ml',
        price: 7,
        type: product,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Refrigerante 750ml',
        price: 10,
        type: product,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Suco de Frutas Natural',
        price: 7,
        type: product,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Água 500ml',
        price: 5,
        type: product,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Água 750ml',
        price: 7,
        type: product,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ovo',
        price: 1,
        type: extras,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Queijo',
        price: 1,
        type: extras,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vegetariano',
        price: 0,
        type: options,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bovina',
        price: 0,
        type: options,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Frango',
        price: 1,
        type: options,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
    */

    return queryInterface.bulkDelete('products', null, {});

  }
};