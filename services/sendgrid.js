const sgMail = require('@sendgrid/mail');

const RegisterSengrid = async (config) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    //config es un objeto, el cual config.to recibe el email como body
    config = {
        to: config.email,
        from: 'leandro_colocdk@hotmail.com',
        subject: "Mail enviado desde la App Somos Más",
        text: "Gracias por tu registro",
        html: "<H2>Bienvenido/a a Somos Más</H2>",
        mail_settings: {
            sandbox_mode: {
                enable: true // true (no se descuentan los email diarios)

            }
        }
    }
    // Email del cual estará configurado sendgrid
    // config.from = "leandro_colocdk@hotmail.com"
    return await sgMail.send(config);

}

const ContactSendgrid = async (config) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    //config es un objeto, el cual config.to recibe el email como body

    config = {
        to: config.to,
        from: 'leandro_colocdk@hotmail.com',
        subject: "Mail enviado desde la App Somos Más",
        text: "Gracias por contactarse con Somos Más",
        html: "<H2>Gracias por contactarse con Somos Más</H2>,<p>Su correo llego correctamente!</p>",
        // mail_settings: {
        //     sandbox_mode: {
        //         enable: true // true (no se descuentan los email diarios)
        //     }
        // }
    }
    // Email del cual estará configurado sendgrid
    // config.from = "leandro_colocdk@hotmail.com"
    return await sgMail.send(config);
}
module.exports = {
    ContactSendgrid,
    RegisterSengrid
};