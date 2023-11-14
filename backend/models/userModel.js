const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name : {
        type : String,
        required: true
    },

    email : {
        type : String,
        required: true,
        unique: true
    },


    password : {
        type : String,
        required: true
    },

    confirmed : {
        type : Boolean,
        default: false

    }

    
})

userSchema.statics.signup = async function(name, email, password){

    const emailExist = await this.findOne({ email })

    if (emailExist) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ name, email, password: hash})

    return user
}


userSchema.statics.login =  async function(email, password){
       if(!email || !password){
        throw Error('Email or Password invalid')
       }

       const userExist = await this.findOne({ email })

       if(!userExist){
             throw Error('Incorrect email')
}


    if (!userExist.confirmed){
        throw Error('Please confirm your email to Login')
    }

     const match = await bcrypt.compare(password, userExist.password)

     if(!match){
        throw Error('Incorrect Password')
     }

     return userExist;
}




module.exports = mongoose.model('User', userSchema)