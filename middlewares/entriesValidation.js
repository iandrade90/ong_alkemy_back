const { body } = require("express-validator");

const createValidation = [
  body("name").notEmpty().withMessage("El nombre es obligatorio"),
  body("content").notEmpty().withMessage("El contenido es obligatorio"),
  body("image").notEmpty().withMessage("La imagen es obligatoria"),
  body("categoryId").notEmpty().withMessage("El categoryId es obligatorio"),
];

module.exports = createValidation;
