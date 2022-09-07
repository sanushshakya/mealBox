'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_Name: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      recipe_Name: {
        allowNull: true,
        type: Sequelize.STRING,
        foreignKey: true,
        unique: true,
        references: {
          model: {
            tableName: 'recipes'
          },
          key: 'name'
        }
      },
      description: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('products');
  }
};