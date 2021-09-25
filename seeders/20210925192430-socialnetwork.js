"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "SocialNetworks",
      [
        {
          description: "Instagram",
          value: "SomosMás",
          organizationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Facebook",
          value: "Somos_Más",
          organizationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
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
