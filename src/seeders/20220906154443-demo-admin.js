'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('admins', [{
      name: "Sanush Shakya",
      email: 'sanush@meal.com',
      password: '12345',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('admins', null, {});
  }
};
