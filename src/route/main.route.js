const express = require('express');
const router = express.Router();
const adminRoute = require('./admin.route');
const recipeRoute = require('./recipe.route');
const productRoute = require('./product.route');

router.use('/admin',adminRoute);
router.use('/recipe',recipeRoute);
router.use('/product',productRoute);

module.exports = router;