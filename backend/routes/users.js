const express = require('express')

const { signUpUser, loginUser, verificationLink} = require('../controllers/userController')

const router = express.Router()

router.post('/register', signUpUser)
router.post('/login', loginUser)
router.get('/:id/verify/:token', verificationLink)



module.exports = router