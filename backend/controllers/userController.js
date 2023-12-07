const User =  require('../models/userModel');
const mongoose = require('mongoose')
const { signUpschema, options } = require('../utils/validation')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const sendEmail = require('./sendEmail')
const bcrypt = require('bcrypt')

const createToken = (_id, email) => {
  const verificationToken = crypto.randomBytes(32).toString('hex')
  return jwt.sign({ _id, email, verificationToken }, process.env.SECRET, { expiresIn: '3d' })
}



//Sign up

const signUpUser = async (req, res) =>{



    const { name, email, password } = req.body

    const validateResult = signUpschema.validate(req.body, options);

    if(validateResult.error){
        res.status(400).json({error:validateResult.error.details[0].message})
    }

    try {
        const user = await User.signup( name, email, password )

        const token = createToken(user._id, user.email)

        const url = `${process.env.BASE_URL}/api/users/${user._id}/verify/${token}`

        sendEmail(user.email, "Verify your email", `Kindly verify here ${url}`)

        res.status(200).json({token})
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


const verificationLink = async (req, res) =>{

    const { id } = req.params;
    const token = req.params

    try {
        const user = await User.findOne({_id: id})

        if(!user){
            return res.status(400).json({message: "Invalid link"})
        }

        if(!token){
            return res.status(400).json({message: "Invalid link"})
        }

        await User.findOneAndUpdate({_id:id},{ confirmed: true})
        

        res.status(200).json({message: "Email Verified Successfully"})
        

        
    } catch (error) {
        res.status(500).json({error: error.message})
    }

}



const forgotPasswordLink = async (req, res) =>{

    const { email } = req.params;

    try {
        const user = await User.findOne({ email: email })

        const token = createToken(user._id)
    
        if(!user){
            return res.status(400).json({message: "Invalid link"})
        }
    
        if(!token){
            return res.status(400).json({message: "Invalid link"})
        }
    
        const url = `${process.env.BASE_URL}api/users/${user._id}/reset/${token}`
    
        sendEmail(user.email, "Reset you password", `Click ${url} to reset password`)

    
    } catch (error) {
        res.status(500).json({error: error.message})
    }
   
}



const resetPassword = async (req, res)=>{

    const { id } = req.params;

    const token = req.params;

     const { password } = req.body

     try {

        if(!user){
            return res.status(400).json({message: "Invalid link"})
        }
    
        if(!token){
            return res.status(400).json({message: "Invalid link"})
        }
        
        const salt = await bcrypt.genSalt(10)
     const hash = await bcrypt.hash(password, salt)

    const user = await User.findOneAndUpdate({_id: id}, {password: hash}, { new: true })

    const updatedUser = {
        _id: user._id,
        email: user.email,
        name: user.name
    }

    res.status(200).json(updatedUser)
     } catch (error) {
        res.status(500).json({error: error.message})
     }

     


}

module.exports = { signUpUser, loginUser, verificationLink, resetPassword, forgotPasswordLink }