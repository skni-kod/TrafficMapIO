const express = require('express')

// Controllers
const loginController = require('../Controllers/LoginController')

const router = express.Router()

router.post('/', loginController, (req, res) => {})

module.exports = router;