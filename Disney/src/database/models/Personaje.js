'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personaje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Personaje.belongsToMany(models.Pelicula_serie, {
          as:'pelicula_serie',
          through: 'personaje_detail',
          foreignKey: 'pelicula_serie_asociada',
      })
    }
  }
  Personaje.init({
    imagen: DataTypes.STRING,
    nombre: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    peso: DataTypes.INTEGER,
    historia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Personaje',
  });
  return Personaje;
};