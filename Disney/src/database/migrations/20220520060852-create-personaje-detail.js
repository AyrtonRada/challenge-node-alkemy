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
      pelicula_serie_asociada: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Pelicula_serie',
          key: 'id'
        }
      },
      personajeAsociada: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Personaje',
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