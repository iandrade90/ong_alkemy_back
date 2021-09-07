const { check } = require('express-validator');
const { customValidationResult: validationResult } = require('../validationResult');

const urlNotEmpty = check("imageUrl", "Image field is empty").notEmpty();
const textNotEmpty = check("text", "Text field is empty").notEmpty();
const orderNotEmpty = check("order", "Order field is empty").notEmpty();
const orderNaN = check("order", "Order must be a number").isNumeric();

exports.slideValidation = [
    urlNotEmpty,
    textNotEmpty,
    orderNotEmpty,
    orderNaN,
    validationResult,
];