const Patient = require('../models/patientsModel');
const Therapist = require('../models/therapistsModel');
const mongoose = require('mongoose');


const getMatchingTherapists = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json("This patient does not exist");
    }
  
    const patient = await Patient.findById(id);
    if (!patient) {
      return res.status(404).json("Patient not found");
    }
  
    
    const matchingTherapists = await Therapist.find({
      'experiences': { $in: patient.experiences }
    });
  
    return res.status(200).json(matchingTherapists);
  }
  

  module.exports = getMatchingTherapists;