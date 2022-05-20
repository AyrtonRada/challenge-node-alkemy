'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class personaje_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  personaje_detail.init({
    personaje_id: DataTypes.INTEGER,
    pelicula_serie_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'personaje_detail',
  });
  return personaje_detail;
};