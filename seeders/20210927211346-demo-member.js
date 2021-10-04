"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Members",
      [
        {
          name: "Maria Garcia",
          image:
            "https://drive.google.com/file/d/152GBrIzHCw2AGUpQO7jc12xQ3zaFvhK9/view?usp=sharing",
          createdAt: "2021-01-01",
          updatedAt: "2021-01-01",
        },
        {
          name: "Marco Fernandez",
          image:
            "https://drive.google.com/file/d/156uGhIMSWD_iOmvZEy3-UnGFLhvLW9r5/view?usp=sharing",
          createdAt: "2021-01-01",
          updatedAt: "2021-01-01",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => { },
};
