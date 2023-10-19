const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema({
    fullName : {
        type : String,
        required: true
    },

    email : {
        type : String,
        required: true,
        unique: true
    },

    userName : {
        type : String,
        required: true
    },

    password : {
        type : String,
        required: true
    },

    userType : {
        type : String,
        required : true
    }
})

userSchema.statics.signup = async function(email, password){

    const emailExist = await this.findOne({ email })

    if (emailExist) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ fullName, email, userName, password: hash, userType })

    return user
}

module.exports = mongoose.model('User', userSchema)