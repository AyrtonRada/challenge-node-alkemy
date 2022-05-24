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
          through: 'personaje_details',
          foreignKey: 'pelicula_serie_asociada',
          otherKey: 'personajeAsociada',
          timestamps: true
      })
    }
  }
  Personaje.init({
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    peso: {
      type: DataTypes.INTEGER
    },
    historia: {
      type: DataTypes.STRING,
      allowNull: false
    }}, {
    sequelize,
    modelName: 'Personaje',
  });
  return Personaje;
};