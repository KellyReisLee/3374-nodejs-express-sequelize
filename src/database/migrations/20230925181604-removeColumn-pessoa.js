'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Remove a coluna `deleteAt` da tabela `pessoas`
    await queryInterface.removeColumn('pessoas', 'deleteAt');
  },
  async down(queryInterface, Sequelize) {
    // Adiciona a coluna `deleteAt` de volta à tabela `pessoas`
    await queryInterface.addColumn('pessoas', 'deleteAt', {
      allowNull: true,  // Permite valores nulos
      type: Sequelize.DATE,  // Tipo de dado para a coluna
    });
  }
};
