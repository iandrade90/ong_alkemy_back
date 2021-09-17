const sgMail = require('@sendgrid/mail');

const EmailSendgrid = async (email) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    config = {
        to: email,
        from: 'leandro_colocdk@hotmail.com',
        subject: "Test",
        text: "Test",
        html: "Test",
    }
    // Email del cual estará configurado sendgrid
    // config.from = "leandro_colocdk@hotmail.com"
    return await sgMail.send(config);
}
module.exports = {
    EmailSendgrid
};