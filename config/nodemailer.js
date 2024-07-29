import nodemailer from "nodemailer"

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
    host:'smtp.office365.com',
    port: 587,
    secure: false, // use TLS
    auth:{
        user:email,
        pass
    }
})

export const mailOptions = {
    from:email,
    to:email,
}