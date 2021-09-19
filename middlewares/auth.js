const {check} = require("express-validator")
const {customValidationResult} = require('./')
const authService = require("../services/authService")
//Validaciones
const _validEmail = check("email", "Email is invalid").isEmail();
const _requiredEmail = check("email", "Email field is required").notEmpty();
const _uniqueEmail = check("email").custom(async email => {
  const user = await authService.findByEmail(email);

  if (user) {
    throw new AppError(
      "Email is already used. Please try with a different email address.",
      400
    );
  }
});
const _requiredName = check("name", "Name field is required").notEmpty();
const _requiredPassword = check(
  "password",
  "Password field is required"
).notEmpty();

// Grupos de validaciones

const loginValidations = [
  _validEmail,
  _requiredEmail,
  _requiredPassword,
  customValidationResult,
];

module.exports = {loginValidations}