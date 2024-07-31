import axios from "axios";
import nodemailer from "nodemailer"

const email = process.env.EMAIL;


const config = {
    clientId: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    tenantId: process.env.TENANTID
};

let cachedToken = null;
let tokenExpiresAt = 0;

export const getAccessToken = async () => {
    if (cachedToken && Date.now() < tokenExpiresAt) {
        return cachedToken;
    }

    try {
        const response = await axios.post(`https://login.microsoftonline.com/${config.tenantId}/oauth2/v2.0/token`, new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: config.clientId,
            client_secret: config.clientSecret,
            scope: 'https://graph.microsoft.com/.default'
        }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })

        const { access_token, expires_in } = response.data;
        cachedToken = access_token;
        tokenExpiresAt = Date.now() + (expires_in * 1000) - 60000; // Refresh 1 minute before expiry

        return cachedToken;
    } catch (error) {
        console.error('Error obtaining access token:', error.response ? error.response.data : error.message);
        throw error;
    }
}


export const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // use STARTTLS
    auth: {
        type: 'OAuth2',
        user: 'info@archiive.co',
        accessToken: await getAccessToken(),
        clientId: config.clientId,
        clientSecret: config.clientSecret
    }
})

export const mailOptions = {
    from: email,
    to: email,
}



//----------------------------------------

