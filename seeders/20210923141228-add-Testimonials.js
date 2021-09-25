'use strict';
 
module.exports = {
  up: async (queryInterface, Sequelize) => {
    

      await queryInterface.bulkInsert('Testimonials', [{
        name: 'Testimonio 1',
        image: "https://images.unsplash.com/photo-1632181854242-77779209721c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=388&q=80",
        content:"El contenido del testimonio 1",
        createdAt: new Date,
        updatedAt: new Date
      },{
        name: 'Testimonio 2',
        image: "https://images.unsplash.com/photo-1632090947779-9af3a457e6e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80",
        content:"El contenido del testimonio 2",
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
