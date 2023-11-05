const User =  require('../models/userModel');
const mongoose = require('mongoose')
const { signUpschema, options } = require('../utils/validation')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const sendEmail = require('./sendEmail')

const createToken = (_id, email) => {
  const verificationToken = crypto.randomBytes(32).toString('hex')
  return jwt.sign({ _id, email, verificationToken }, process.env.SECRET, { expiresIn: 300 })
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

        const url = `${process.env.BASE_URL}api/users/${user._id}/verify/${token}`

        sendEmail(user.email, "Verify your email", `Kindly verify here ${url}`)

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
        // await token.remove()

        
    } catch (error) {
        res.status(500).json({error: error.message})
    }

}


module.exports = { signUpUser, loginUser, verificationLink }