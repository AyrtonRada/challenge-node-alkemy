'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class genero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      genero.hasMany(models.pelicula_serie,{
          as: 'peliculas',
          foreignKey: 'genero_id'
      })
    }
  }
  genero.init({
    nombre: DataTypes.STRING,
    imagen: DataTypes.STRING,
    pelicula_serie: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'genero',
  });
  return genero;
};