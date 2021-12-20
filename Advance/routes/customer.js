const express = require('express');
const router = express.Router();

const customerController = require('../controllers/CustomerController');

// All CRUD ROUTES FOR CUSTOMER
router.post('/create', customerController.create);
router.post('/getAll', customerController.readAll);
router.post('/get/:id', customerController.read);
router.post('/update/:id', customerController.update);
router.post('/delete/:id', customerController.delete);


module.exports = router;