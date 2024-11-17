const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceControllers');

// Define routes for services
router.post('/services', serviceController.createService);
router.get('/services', serviceController.getAllServices);
router.put('/services/:id', serviceController.updateService);
router.delete('/services/:id', serviceController.deleteService);

module.exports = router;
