const joi = require('@hapi/joi')
const { CLIENT_IGNORE_SIGPIPE } = require('mysql/lib/protocol/constants/client')

const studentSchema = joi.object({
    S_ID: joi.string().required(),
    S_NAME: joi.string().strip().lowercase(),
    DEPARTMENT: joi.string().required(),
    CGPA: joi.number().required()

})

const authSchema = joi.object({
    email : joi.string().email().required(),
    password : joi.string().min(8).required()
})

module.exports={
    authSchema,
    studentSchema
}

console.log(authSchema.validate({email:"tanmaya@gmail.com",password:"tanmaya1234"}).error)