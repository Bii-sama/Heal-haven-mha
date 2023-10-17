const Therapist = require('../models/therapistsModel')
const mongoose =  require('mongoose')


//Get all therapists

const getTherapists = async (req, res) =>{
      const therapists = await Therapist.find({}).sort({createdAt: -1})

      res.status(200).json(therapists)
}



//Get single therapist

const getATherapist = async (req, res) =>{
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json("This therapist does not exist")
    }

    const therapist = await Therapist.findById(id)

    if(!therapist){
       return res.status(404).json({
            error: "This therapist does not exist"
        })
    }

    res.status(200).json(therapist)
}



//Create new therapist

const createTherapist = async (req, res) =>{
    const {fullName, title, gender, religion, languages, experiences, 
        quote, journey, approach, education, culturalCompetency, feeStructure, reviews} = req.body;
    try{
    const therapist = await Therapist.create({fullName, title, gender, religion, languages, experiences, 
        quote, journey, approach, education, culturalCompetency, feeStructure, reviews})
    res.status(200).json(therapist)
    }catch(error){
    res.status(400).json({error: error.message})
    }
}



//Update theapist info


const updateTherapist = async (req, res) =>{
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json("This therapist does not exist")
    }

    const therapist = await Therapist.findOneAndUpdate({_id:id}, {...req.body})


    if(!therapist){
        return res.status(404).json({
             error: "This therapist does not exist"
         })
     }
    res.status(200).json(therapist)

    
}


//Delete Therapist

const deleteTherapist = async (req, res) =>{
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json("This therapist does not exist")
    }

    const therapist = await Therapist.findOneAndDelete({_id:id})

    if(!therapist){
        return res.status(400).json({
             error: "This therapist does not exist"
         })
     }

     res.status(200).json({mssg: "Therapist deleted"})
    
}




module.exports = {
    createTherapist,
    getTherapists,
    getATherapist,
    updateTherapist,
    deleteTherapist
}