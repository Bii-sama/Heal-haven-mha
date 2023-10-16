const express = require('express')
const {createTherapist, getTherapists, getATherapist} = require('../controllers/therapistController')

const router = express.Router()

//Get all therapists

router.get('/', getTherapists)

router.post('/', createTherapist)

//Get a single therapist
router.get('/:id', getATherapist)

//Delete a single therepist
router.delete('/:id', (req, res) => {
    res.json({mssg:'Delete therapist information'})
})

//Update therapist information

router.patch('/:id', (req, res) => {
    res.json({mssg:'Update therapist information'})
})


module.exports = router