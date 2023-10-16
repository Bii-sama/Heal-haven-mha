const express = require('express')

const router = express.Router()

router.post('/register')
router.post('/login')
router.get('/profile')


module.exports = router