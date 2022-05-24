'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personaje_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Personaje_detail.belongsTo(models.Pelicula_serie,{
        as: 'pelicula_serie',
        foreignKey: 'pelicula_serie_asociada'
      });
      Personaje_detail.belongsTo(models.Personaje, {
        as:'personaje',
        foreignKey:'personajeAsociada'
      })
    }
  }
  Personaje_detail.init({
    pelicula_serie_asociada: DataTypes.INTEGER,
    personajeAsociada: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Personaje_detail',
  });
  return Personaje_detail;
};