'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recipes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({products}) {
      this.hasMany(products, {
        foreignKey: 'recipe_Name'
      })
    }
  }
  recipes.init({
    name: DataTypes.STRING,
    protein: DataTypes.INTEGER,
    calories: DataTypes.INTEGER,
    carbohydrates: DataTypes.INTEGER,
    fat: DataTypes.INTEGER,
    sugar: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'recipes',
  });
  return recipes;
};