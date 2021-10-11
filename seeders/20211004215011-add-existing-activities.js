'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Activities', [{
      name: "Olla popular",
      image: "https://www.puraciudad.com.ar/wp-content/uploads/2017/07/olla-popular.jpg",
      content: "voluntariado para la reparticion de alimentos a personas en situacion grave",
      createdAt: new Date,
      updatedAt: new Date
     },{
      name: "Organizacion de deportes para niños",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpuMCKlI1mnuojJZQfa1VwpukjtB4HDThFfQ&usqp=CAU",
      content: "voluntariado para la fomentación sobre la participación de los niños en deportes",
      createdAt: new Date,
      updatedAt: new Date
     },{
      name: "Repartición de ropa donada",
      image: "https://www.puraciudad.com.ar/wp-content/uploads/2017/07/olla-popular.jpg",
      content: "voluntariado para la reparticion de ropa a personas en situacion de calle",
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
