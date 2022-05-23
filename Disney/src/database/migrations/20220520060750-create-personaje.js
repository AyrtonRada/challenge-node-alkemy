'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('personajes', {
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
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      edad: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      peso: {
        type: Sequelize.INTEGER
      },
      historia: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pelicula_serie_asociada: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('personajes');
  }
};