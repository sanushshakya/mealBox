const router = require('express').Router();
const RecipeController = require('../controller/recipe.controller');

router.get('/', RecipeController.getAllRecipes);
router.get('/:id', RecipeController.getRecipes);
router.post('/', RecipeController.createRecipes);
router.put('/:id', RecipeController.updateRecipes);
router.delete('/:id', RecipeController.deleteRecipes);


module.exports = router;