const express = require('express');
const router = express.Router();

const orderController = require('../controllers/OrderControllers');

// All CRUD ROUTES FOR CUSTOMER
router.post('/create', orderController.create);
router.post('/getAll', orderController.readAll);
router.post('/get/:id', orderController.read);
router.post('/update/:id', orderController.update);
router.post('/delete/:id', orderController.delete);


module.exports = router;