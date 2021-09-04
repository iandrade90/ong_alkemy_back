'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    //  * Add seed commands here.
    //  *
    //  * Example:
      await queryInterface.bulkInsert('Organizations', [{
      name: 'John Doe',
      image: "false",
      phone: "112323214",
      address: "giuasnd",
      welcomeText: "faundasd",
      createdAt: new Date,
      updatedAt: new Date
      }], {});
  },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
