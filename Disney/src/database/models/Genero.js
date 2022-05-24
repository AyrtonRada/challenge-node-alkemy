'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Genero.hasMany(models.Pelicula_serie,{
          as: 'peliculas',
          foreignKey: 'pelicula_serie_asociada'
      })
    }
  }
  Genero.init({
    nombre: DataTypes.STRING,
    imagen: DataTypes.STRING,
    pelicula_serie_asociada: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Genero',
  });
  return Genero;
};