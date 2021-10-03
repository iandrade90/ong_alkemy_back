'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Category', [{
      name: 'News',
      description: 'News Desc.',
      deletedAt: null,
      createdAt: new Date,
      updatedAt: new Date
    },{
      name: 'Category',
      description: 'News Desc',
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
