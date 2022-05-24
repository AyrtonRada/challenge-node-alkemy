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
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      fechaDeCreacion: {
        type: Sequelize.DATE,
        allowNull: false
      },
      calificacion: {
        type: Sequelize.INTEGER,
        allowNull: false
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