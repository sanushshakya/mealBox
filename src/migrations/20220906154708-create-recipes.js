'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      protein: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      calories: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      carbohydrates: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      fat: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      sugar: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('recipes');
  }
};