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
          foreignKey: 'genero_id'
      })

      Pelicula_serie.belongsToMany(models.Personaje, {
          as: 'personajes',
          through: 'personaje_detail',
          foreignKey: 'pelicula_serie_id',
          otherKey: 'personaje_id'
      })
    }
  }
  Pelicula_serie.init({
    imagen: DataTypes.STRING,
    titulo: DataTypes.STRING,
    fechaDeCreacion: DataTypes.DATE,
    calificacion: DataTypes.INTEGER,
    personajesAsociados: DataTypes.STRING,
    genero_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pelicula_serie',
  });
  return Pelicula_serie;
};