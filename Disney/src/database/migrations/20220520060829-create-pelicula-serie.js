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
      personajesAsociados: {
        type: Sequelize.STRING,
        allowNull: false
      },
      genero_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'genero',
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
    await queryInterface.dropTable('pelicula_series');
  }
};