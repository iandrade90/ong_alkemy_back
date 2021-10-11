"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Members",
      [
        {
          name: "María García",
          image: "https://i.ibb.co/VW19K4g/Mar-a-Garcia.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Marco Fernández",
          image: "https://i.ibb.co/TBchTDg/Marco-Fernandez.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rodrigo Fuente",
          image: "https://i.ibb.co/PW5jKjn/Rodrigo-Fuente.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "María Irola",
          image:
            "https://images-ext-1.discordapp.net/external/kPl353-HL7xkALmwot13Amv-brMw_ieehlWuUeiU3B0/https/i.ibb.co/F635ZVB/Mar-a-Irola.jpg?width=495&height=670",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Marita Gomez",
          image:
            "https://images-ext-2.discordapp.net/external/jY15Q9e1abfWGowEWexyan57hwIiqEYAk2Z_T7t5Ng8/https/i.ibb.co/yRCN2tV/Marita-Gomez.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Miriam Rodríguez",
          image:
            "https://images-ext-2.discordapp.net/external/Njij2p-GJIDHLHuDJz8iygTgy8Or7r2rP-YhLtMAkrk/https/i.ibb.co/wrxCTZL/Miriam-Rodriguez.jpg?width=447&height=670",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {},
};
