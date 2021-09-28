const { check } = require("express-validator");
const { customValidationResult } = require("./commons");


const nameRequired = check("name", "Name field is required").notEmpty()
const contentRequired = check("content", "Content field is required").notEmpty()

//* Eventualmente se debe aplicar el middleware de token necesario 
const createValidations = [nameRequired, contentRequired, customValidationResult]

module.exports = {
    createValidations
}