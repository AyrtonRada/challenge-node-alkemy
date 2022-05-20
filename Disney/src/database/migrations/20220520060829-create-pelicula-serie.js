'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pelicula_series', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imagen: {
        type: Sequelize.STRING
      },
      titulo: {
        type: Sequelize.STRING
      },
      fechaDeCreacion: {
        type: Sequelize.DATE
      },
      calificacion: {
        type: Sequelize.INTEGER
      },
      personajesAsociados: {
        type: Sequelize.STRING
      },
      genero_id: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('pelicula_series');
  }
};