'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pelicula_serie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pelicula_serie.init({
    imagen: DataTypes.STRING,
    titulo: DataTypes.STRING,
    fechaDeCreacion: DataTypes.DATE,
    calificacion: DataTypes.INTEGER,
    personajesAsociados: DataTypes.STRING,
    genero_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pelicula_serie',
  });
  return pelicula_serie;
};