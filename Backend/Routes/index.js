const express = require('express');
const router = express.Router();

const PageController = require('../controllers/PagesController');
const ApplicationController = require('../controllers/ApplicationsControler');

router.get('/', PageController.rejestracja);

router.post('/applications',
    ApplicationController.validate,
    ApplicationController.checkValidation,
    ApplicationController.store);

module.exports = router;