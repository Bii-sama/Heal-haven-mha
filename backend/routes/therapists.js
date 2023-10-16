const express = require('express')
const Therapist = require('../models/therapistsModel')

const router = express.Router()

//Get all therapists

router.get('/', (req, res) => {
     res.json({mssg:'Fetch all therapists'})

})

router.post('/', async (req, res) => {
const {fullName, title, gender, religion, languages, experiences, quote, journey, approach, education, culturalCompetency, feeStructure, reviews} = req.body;
try{
const therapist = await Therapist.create({fullName, title, gender, religion, languages, experiences, quote, journey, approach, education, culturalCompetency, feeStructure, reviews})
res.status(200).json(therapist)
}catch(error){
res.status(400).json({error: error.message})
}
})

//Get a single therapist
router.get('/:id', (req, res) => {
    res.json({mssg:'Fetch a specific therapist'})
})

//Delete a single therepist
router.delete('/:id', (req, res) => {
    res.json({mssg:'Delete therapist information'})
})

//Update therapist information

router.patch('/:id', (req, res) => {
    res.json({mssg:'Update therapist information'})
})


module.exports = router