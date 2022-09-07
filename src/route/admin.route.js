const router = require('express').Router();
const AdminController = require('../controller/admin.controller');

router.get('/', AdminController.getAdmin);
router.post('/', AdminController.createAdmin);
router.put('/:id', AdminController.updateAdmin);
router.delete('/:id', AdminController.deleteAdmin)

module.exports = router;