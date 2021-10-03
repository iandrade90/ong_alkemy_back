const { check } = require("express-validator");
const { customValidationResult: checkValidations } = require("./commons");

//! REVISAR: validaciones de autorizacion

// VALIDATIONS
const nameRequired = check("name", "El campo name es requerido").notEmpty();
const nameIsString = check(
  "name",
  "El campo name debe ser de tipo texto"
).isString();

const createValidations = [
  nameRequired,
  nameIsString,
  checkValidations,
];

module.exports = { createValidations };
