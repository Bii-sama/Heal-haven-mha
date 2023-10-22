const User =  require('../models/userModel');
const mongoose = require('mongoose')
const { signUpschema, options } = require('../utils/validation')


//Sign up

const signUpUser = async (req, res) =>{



    const { fullName, email, userName, password, confirmPassword, userType } = req.body

    const validateResult = signUpschema.validate(req.body, options);

    if(validateResult.error){
        res.status(400).json({error:validateResult.error.details[0].message})
    }

    try {
        const user = await User.signup( fullName, email, userName, password, confirmPassword ,userType )

        res.status(200).json({email, user})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


//Login User

const loginUser = (req, res) =>{
   res.json({mssg: "User login successful"})
}


module.exports = { signUpUser, loginUser }