const { RegisterSengrid } = require('../services/sendgrid')

const register = async (req, res, next) => {

    const { email } = req.body;
    try {
        await RegisterSengrid({ email });

        res.status(201).json({ 'message': 'Usuario registrado con exito!' });
    } catch (err) {
        console.log(err.message)
        res.status(503).json({ "message": "Email no enviado" })
    }

};

module.exports = { register };
