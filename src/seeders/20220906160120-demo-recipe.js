'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('recipes', [{
      name: "Peri Peri Chicken",
      protein: "10",
      calories:"5",
      carbohydrates: "2",
      fat: "0.3",
      sugar: "0",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('recipes', null, {});
  }
};
