'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pelicula_serie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pelicula_serie.belongsTo(models.Genero, {
          as: 'generos',
          foreignKey: 'pelicula_serie_asociada'
      })

      Pelicula_serie.belongsToMany(models.Personaje, {
          as: 'personajes',
          through: 'personaje_detail',
          foreignKey: 'personajeAsociada',
      })
    }
  }
  Pelicula_serie.init({
    imagen: DataTypes.STRING,
    titulo: DataTypes.STRING,
    fechaDeCreacion: DataTypes.DATE,
    calificacion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pelicula_serie',
  });
  return Pelicula_serie;
};