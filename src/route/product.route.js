const router = require('express').Router();
const ProductController = require('../controller/product.controller');

router.get('/', ProductController.getAllProducts);
router.post('/', ProductController.createProduct);
router.put('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);


module.exports = router;