const express = require('express')
const {createTherapist, getTherapists, getATherapist, updateTherapist, deleteTherapist} = require('../controllers/therapistController')
const reqAuth = require('../middlewares/reqAuth')

const router = express.Router();

router.use(reqAuth)

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