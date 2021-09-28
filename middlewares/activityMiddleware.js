const { check } = require('express-validator');
const { customValidationResult: validationResult } = require('./commons');

const nameNotEmpty = check("name", "La actividad debe tener un nombre.").notEmpty();
const contentNotEmpty = check("content", "La actividad debe tener un contenido.").notEmpty();

const createActivityValidation = [
    contentNotEmpty,
    nameNotEmpty,
    validationResult,
];

module.exports = createActivityValidation;