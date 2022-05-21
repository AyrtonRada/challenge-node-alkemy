'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class personaje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      personaje.belongsToMany(models.pelicula_serie, {
          as:'pelicula_serie',
          through: 'personaje_detail',
          foreignKey: 'personaje_id',
          otherKey: 'pelicula_serie_id'
      })
    }
  }
  personaje.init({
    imagen: DataTypes.STRING,
    nombre: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    peso: DataTypes.INTEGER,
    historia: DataTypes.STRING,
    pelicula_serie: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'personaje',
  });
  return personaje;
};