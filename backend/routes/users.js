const express = require('express')

const { signUpUser, loginUser} = require('../controllers/userController')

const router = express.Router()

router.post('/register', signUpUser)
router.post('/login', loginUser)
// router.get('/profile')


module.exports = router