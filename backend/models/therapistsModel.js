const mongoose = require('mongoose')

const Schema = mongoose.Schema

const therapistSchema = new Schema({
    fullName : {
        type: String,
        required: true
    },

    title : {
        type : String,
        required: true
    },

    gender : {
        type : String,
        required: true
    },

    religion : {
        type : String,
        required: true
    },

    languages : {
        type : Array,
        required : true
    },

    experiences : {
        type : Array,
        required: true
    },

    quote : {
        type : String,
        required: true
    },

    journey : {
        type : String,
        required: true
    },

    approach : {
        type : String,
        required: true
    },

    education : {
        type : String,
        required: true
    },

    culturalCompetency : {
        type : String,
        required: true
    },

    feeStructure : {
        type : Array,
        required: true
    },

    reviews : {
        type : Array,
        required: true
    }

}, {timestamps: true})


module.exports =mongoose.model('Therapist', therapistSchema)