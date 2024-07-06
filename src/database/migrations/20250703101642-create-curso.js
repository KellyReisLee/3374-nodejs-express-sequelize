'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cursos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      data_inicio: {
        type: Sequelize.DATEONLY
      },
      docente_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // 'model' é só o nome da propriedade - Aqui passamos o nome da tabela associada.
        // 'key' passamos o nome da coluna que vai fazer a associação.
        references: { model: 'pessoas', key: 'id' }

      },
      categoria_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // 'model' é só o nome da propriedade - Aqui passamos o nome da tabela associada.
        // 'key' passamos o nome da coluna que vai fazer a associação.
        references: { model: 'categorias', key: 'id' }

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cursos');
  }
};

