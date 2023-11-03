const express = require('express')
const jwt = require('jsonwebtoken')
const User =  require('../models/userModel')
const jwt_secret = process.env.SECRET;


const reqAuth = async (req, res, next) =>{
    
        const { authorization }  = req.headers
        //console.log(authorization)

        if(!authorization){
            return res.status(401).json({
                Error: "Kindly Login"
            })
        }

        const token = authorization.split(' ')[1]

      try {
        const {_id} = jwt.verify(token, jwt_secret)

        req.user = await User.findOne({ _id }).select('_id')

        next()



      } catch (error) {
        console.log(error)
        res.status(401).json({
            error: "Request not verified"
        })
      }


        
       
        
}


module.exports = reqAuth;