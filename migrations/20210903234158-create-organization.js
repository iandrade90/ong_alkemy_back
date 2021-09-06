'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Organizations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      welcomeText: {
        type: Sequelize.STRING
      },

    }, {
      createdAt: false,
      updatedAt : false
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Organizations');
  }
};