const express = require('express')
const {createTherapist, getTherapists, getATherapist, updateTherapist, deleteTherapist} = require('../controllers/therapistController')

const router = express.Router()

//Get all therapists

router.get('/', getTherapists)

router.post('/', createTherapist)

//Get a single therapist
router.get('/:id', getATherapist)

//Delete a single therepist
router.delete('/:id', deleteTherapist)

//Update therapist information

router.patch('/:id', updateTherapist)


module.exports = router