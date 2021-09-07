const sgMail = require('@sendgrid/mail');

const EmailSengrid = async (config) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    //config es un objeto, el cual config.to recibe el email como body


    // Email del cual estará configurado sendgrid
    config.from = "leandro_colocdk@hotmail.com"

    return await sgMail.send(config);
}
module.exports = EmailSengrid;