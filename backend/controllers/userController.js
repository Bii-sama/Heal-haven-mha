const User =  require('../models/userModel');
const mongoose = require('mongoose')


//Sign up

const signUpUser = async (req, res) =>{

    const { fullName, email, userName, password, userType } = req.body

    try {
        const user = await User.signup(fullName, email, userName, password, userType)

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