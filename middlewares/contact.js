const { check } = require('express-validator');
const { customValidationResult: validationResult } = require('./commons');

const nameNotEmpty = check("name", "El contacto debe tener un nombre.").notEmpty().escape().trim();
const validEmail = check("email", "El formato del correo no es válido.").notEmpty().escape().trim().isEmail();

const createContactValidation = [
    validEmail,
    nameNotEmpty,
    validationResult,
];

module.exports = createContactValidation;