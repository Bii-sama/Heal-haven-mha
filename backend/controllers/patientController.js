const Patient = require('../models/patientsModel');
const mongoose = require('mongoose');

const getPatients =  async (req, res) =>{
    const patients = await Patient.find({}).sort({createdAt : -1});


    if(patients.length === 0){
        res.status(204).send()
    }

    res.status(200).json(patients)
}


const getAPatient = async (req, res) =>{

    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json("This patient does not exist")
    }

    const patient = await Patient.findById(id)

    if(!patient){
        res.status(404).json({error: "This patient does not exist"})
    }

    res.status(200).json(patient)
}


const createPatient = async (req, res) => {

    const {gender, language, belief, religion, experiences,  } = req.body;

    try {
        const patient = await Patient.create({ gender, language, belief, religion, experiences })
        res.status(200).json(patient)

    
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
 
}


const updatePatient = async (req, res) =>{

    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json("This patient does not exist")
    }
try {
    const patient = await Patient.findOneAndUpdate({_id: id}, {...req.body})
    res.status(200).json(patient)
    
} catch (error) {
    res.status(400).json({
        error: error.message
    })
}

}


const deletePatient = async (req, res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json("This patient does not exist")
    }

    const patient = await Patient.findOneAndDelete({_id: id})

    if(!patient){
        return res.status(400).json({
             error: "This patient does not exist"
         })
     }

     res.status(200).json({mssg: "Patient deleted"})
}


module.exports ={
    getPatients,
    getAPatient,
    createPatient,
    updatePatient,
    deletePatient
}