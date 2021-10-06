const { body } = require("express-validator");

const createValidation = [
  body("name")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isString()
    .withMessage("El nombre debe ser un string"),
];

module.exports = createValidation;
