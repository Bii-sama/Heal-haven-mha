const nodemailer = require('nodemailer');

require('dotenv').config()


const sendEmail = async(email, subject, text) =>{
    try {
        const transporter =  nodemailer.createTransport({
            host: process.env.HOST,
            service: process.env.SERVICE,
            port: Number(process.env.EMAIL_PORT),
            secure: Boolean(process.env.SECURE),
            auth:{
                user: process.env.USERNAME1,
                pass: process.env.PASS
            }
        })

        console.log(`My user name is ${process.env.USERNAME1}`)

        await transporter.sendMail({
            from: process.env.USERNAME1,
            to: email,
            subject: subject,
            text: text
        });
        console.log("Email sent successfully")
    } catch (error) {
        console.log(error)
        console.log("Email not sent")
    }
}

module.exports = sendEmail;