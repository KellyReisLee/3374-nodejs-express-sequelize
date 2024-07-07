'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Passe o nome da coluna, o nome da tabela e os tipos de dados da nova coluna.
    await queryInterface.addColumn('pessoas', 'deleteAt', {
      allowNull: true,
      type: Sequelize.DATE

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('pessoas', 'deleteAt');
  }
};