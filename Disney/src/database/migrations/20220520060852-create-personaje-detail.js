'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('personaje_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      personaje_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'personaje',
          key: 'id'
        }
      },
      pelicula_serie_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'pelicula_serie',
          key: 'id'
        }
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
    await queryInterface.dropTable('personaje_details');
  }
};