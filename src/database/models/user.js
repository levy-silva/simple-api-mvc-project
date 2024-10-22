'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      allowNull: false,
      validate: {
        min: 3,
        max: 20,
        notNull: true,
        isAlpha: true,
      },
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      validate: {
        isEmail: true,
      },
      type: DataTypes.STRING,
    },
    role: {
      allowNull: false,
      validate: {
        isIn: ["admin", "customer", "vendor"],
      },
      type: DataTypes.STRING,
    },
    active: {
      allowNull: false,
      validate: {
        
      },
      type: DataTypes.BOOLEA,
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  });
  return User;
};
