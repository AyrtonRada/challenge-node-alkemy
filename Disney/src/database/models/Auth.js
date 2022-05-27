'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Auth extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Auth.init({
    nombreUsuario:{ 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: { 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    contraseña: { 
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Auth',
  });
  return Auth;
};