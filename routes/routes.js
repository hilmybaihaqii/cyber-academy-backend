// route.js
const express = require('express');
const moduleController = require('../controller/uploadModuleController');

const router = express.Router();

// Route to handle posting a new module
router.post('/module', moduleController.postModule);

// Route to get all modules
router.get('/modules', moduleController.getModules);

module.exports = router;