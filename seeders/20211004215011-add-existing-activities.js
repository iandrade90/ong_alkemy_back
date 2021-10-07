'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Activities', [{
      name: "Olla popular",
      image: "https://www.puraciudad.com.ar/wp-content/uploads/2017/07/olla-popular.jpg",
      content: "voluntariado para la reparticion de alimentos a personas en situacion grave",
     },{
      name: "Organizacion de deportes para niños",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpuMCKlI1mnuojJZQfa1VwpukjtB4HDThFfQ&usqp=CAU",
      content: "voluntariado para la fomentación sobre la participación de los niños en deportes",
     },{
      name: "Repartición de ropa donada",
      image: "https://lh3.googleusercontent.com/proxy/O2fozKs-n_xDj1mb4ZMdkFrWgKuz9cXPCFv2eYaRLz78xiS7NlBvTSrML9pV32ZZQzy11lS6iqzxl8VsXEygXDtLLyN0itQEI3BV_2-h0GXE7NVhqVZa2Jd97Lpxb7m-i9CpYdDQxkWBLwIie-g8NWEKRN7_vIh6wA-ZvM6H8OydTGlHTC3Ro3CSGL4Fg_6ObQ2FxRf2-67Vrgru8PI2q_ljXbHzld64BZI",
      content: "voluntariado para la reparticion de ropa a personas en situacion de calle",
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
