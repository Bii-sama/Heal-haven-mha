const mongoose = require('mongoose')

const Schema = mongoose.Schema

const patientSchema = new Schema({
    

    gender : {
        type : String,
        required: true
    },

    language : {
        type : String,
        required : true
    },

    belief : {
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