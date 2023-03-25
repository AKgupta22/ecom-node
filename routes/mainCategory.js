const express = require('express')
const { createMainCategory } = require('../controllers/mainCategory')
const router = express.Router()

//POST API

router.post('/', createMainCategory)

module.exports = router