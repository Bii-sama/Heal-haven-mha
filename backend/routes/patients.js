const express = require('express');
const {
    getPatients,
    getAPatient,
    createPatient,
    updatePatient,
    deletePatient
} = require('../controllers/patientController')

const router = express.Router()

const reqAuth = require('../middlewares/reqAuth')

router.use(reqAuth)



router.get('/', getPatients)

router.get('/profile/:id', getAPatient)

router.post('/create', createPatient)

router.patch('/update/:id', updatePatient)

router.delete('/:id', deletePatient)


module.exports = router