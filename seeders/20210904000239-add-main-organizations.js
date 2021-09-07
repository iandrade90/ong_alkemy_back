'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    //  * Add seed commands here.
    //  *
    //  * Example:
      await queryInterface.bulkInsert('Organizations', [{
      name: 'Somos Más',
      image: "https://drive.google.com/file/d/1-j70Zmn2B1-0T_67JHJbNLKkI9sACMNi/view?usp=sharing",
      phone: "11-6011-2988",
      address: "barrio La Cava",
      welcomeText: "Bienvenido a la pagina oficial de Somos Más",
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
