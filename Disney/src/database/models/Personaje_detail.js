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
        foreignKey: 'personajeAsociada'
      });
      Personaje_detail.belongsTo(models.Personaje, {
        as:'personaje',
        foreignKey:'pelicula_serie_asociada'
      })
    }
  }
  Personaje_detail.init({
    pelicula_serie_asociada: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      references: {
        model: 'Personajes',
        key: 'id'
      }
    },
    personajeAsociada: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: 'Pelicula_series',
        key: 'id'
      },
      allowNull: false,
    }}, {
    sequelize,
    modelName: 'Personaje_detail',
  });
  return Personaje_detail;
};