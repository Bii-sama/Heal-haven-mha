const mongoose = require('mongoose')

const Schema = mongoose.Schema

const patientSchema = new Schema({
    

    therapistGender : {
        type : String,
        required: true
    },

    languages : {
        type : Array,
        required : true
    },

    religiousBeliefs : {
        type : String,
        required: true
    },

    religion : {
        type : String,
        required: true
    },

    experiences : {
        type : Array,
        required: true
    }

}, {timestamps: true})


module.exports =mongoose.model('Patient', patientSchema)