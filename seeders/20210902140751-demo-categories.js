'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Categories', [{
            name: 'News',
            description: 'News Desc.',
            createdAt: new Date,
            updatedAt: new Date
        }, {
            name: 'Categories',
            description: 'News Desc',
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