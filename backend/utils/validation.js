const Joi = require('joi')

const signUpschema = Joi.object().keys({
    fullName: Joi.string().required(),
    email: Joi.string().trim().lowercase().required(),
    userName: Joi.string().required(),
    password: Joi.string().regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,25}$/).required(),
    confirmPassword: Joi.any().equal(Joi.ref("password")).required().label("Confirm Password")
    .messages({'any.only':'{{#label}} does not match'}),
    userType: Joi.string().required()
})

const options = {
    abortEarly : false,
    errors:{
      wrap:{
          label: ""
      }
      
    }
  }


module.exports = {
    signUpschema,
    options
}