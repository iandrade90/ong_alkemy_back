'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SocialNetwork extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SocialNetwork.belongsTo(models.Organization, {
        foreignKey: 'organizationId', 
        onDelete: "CASCADE"
      })
      // define association here
    }
  };
  SocialNetwork.init({
    description: DataTypes.STRING,
    value: DataTypes.STRING,
    organizationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SocialNetwork',
  });
  return SocialNetwork;
};