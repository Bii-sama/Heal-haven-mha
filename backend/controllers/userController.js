const User =  require('../models/userModel');
const mongoose = require('mongoose')
const { signUpschema, options } = require('../utils/validation')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '1d' })
}



//Sign up

const signUpUser = async (req, res) =>{



    const { fullName, email, userName, password, confirmPassword, userType } = req.body

    const validateResult = signUpschema.validate(req.body, options);

    if(validateResult.error){
        res.status(400).json({error:validateResult.error.details[0].message})
    }

    try {
        const user = await User.signup( fullName, email, userName, password, confirmPassword ,userType )

        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


//Login User

const loginUser = async (req, res) =>{

    const { email, password } = req.body

    try {
        const user = await User.login( email, password)

        const token = createToken(user._id)
        

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}


module.exports = { signUpUser, loginUser }