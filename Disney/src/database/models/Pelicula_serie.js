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
      Pelicula_serie.hasMany(models.Genero,{
          as: 'generos',
          foreignKey: 'pelicula_serie_asociada'
      })

      Pelicula_serie.belongsToMany(models.Personaje,{
        as: 'personajes',
        through: 'personaje_details',
        foreignKey: 'pelicula_serie_asociada',
        otherKey: 'personajeAsociada',
        timestamps: true
      })
    }
  }
  Pelicula_serie.init({
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    fechaDeCreacion: {
      type: DataTypes.DATE,
      allowNull: false
    },
    calificacion: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Pelicula_serie',
  });
  return Pelicula_serie;
};