const { check } = require("express-validator");
const { customValidationResult } = require("./commons");


const nameRequired = check("name", "Name field is required").notEmpty()
const contentRequired = check("content", "Content field is required").notEmpty()

//* Eventualmente se debe aplicar el middleware de token necesario 
//* (REVISAR: dicho middleware no verifica que el token sea valido y ademas lanza un error no controlado cuando se envia nada como contenido)
const createValidations = [  nameRequired, contentRequired, customValidationResult]

module.exports = {
    createValidations
}