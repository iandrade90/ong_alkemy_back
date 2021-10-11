'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.bulkInsert('Slides', [{
      imageUrl: "https://www.somos-mas.es/wp-content/uploads/2019/01/SomosMas-1-1.jpg",
      text: "Sumate a #SomosMás",
      order: 1,
      organizationId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      imageUrl: "https://www.aldeasinfantiles.org.ar/getmedia/63df4967-3a4a-4a63-ae2c-a205370af97e/AISOS-Camp-Nac-Banner-1349x4394.jpg?width=1024",
      text: "7 de cada 10 chicos no comen todos los días.",
      order: 1,
      organizationId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      imageUrl: "http://www.somos-mas.es/wp-content/uploads/2019/05/ieso-alovera.jpg",
      text: "Los talleres de Somos Más, dan una oportunidad de hablar en el aula y entre iguales sobre nuestra sociedad y cómo la queremos construir, ya que ellas y ellos serán quienes protagonicen el futuro",
      order: 1,
      organizationId: 1,
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
