"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "SocialNetworks",
      [
        {
          description: "Instagram",
          value: "SomosMás",
          createdAt: new Date,
          updatedAt: new Date,
        },
        {
          description: "Facebook",
          value: "Somos_Más",
          createdAt: new Date,
          updatedAt: new Date,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
