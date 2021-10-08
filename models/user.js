"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Role, { as: "role" });
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    image:{
      type: DataTypes.STRING,
      defaultValue:'https://www.whfamilydentistry.com/wp-content/uploads/2019/08/default.jpg'
    },
    password: DataTypes.STRING,
    roleId:{
      type: DataTypes.INTEGER,
      defaultValue:2
    },
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
    paranoid:true
  });
  return User;
};
