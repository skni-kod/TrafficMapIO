const express = require('express')

// Controllers
const loginController = require('../Controllers/LoginController')


const router = express.Router()

router.get('/login/', loginController, (req, res) => {
    res.end()
})




module.exports = router;