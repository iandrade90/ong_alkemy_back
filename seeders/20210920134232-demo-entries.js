'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Entries', [{
      name: 'Test Name',
      content: 'Test Content',
      image: 'Test Image', 
      categoryId: 1,
      type: 'News',
      deletedAt: null,
      createdAt: new Date,
      updatedAt: new Date
    },{
      name: 'Test Name II',
      content: 'Test Content II',
      image: 'Test Image II', 
      categoryId: 2,
      type: 'Reports',
      deletedAt: null,
      createdAt: new Date,
      updatedAt: new Date
    }
  ], {});
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
