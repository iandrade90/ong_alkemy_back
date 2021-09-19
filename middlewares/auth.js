const { check } = require("express-validator");
const { customValidationResult: checkValidations } = require("./commons");
const userService = require("../services/userService");

// VALIDACIONES
const _validEmail = check("email", "Email is invalid").isEmail();
const _requiredEmail = check("email", "Email field is required").notEmpty();
const _requiredFirstName = check("firstName", "Firstname field is required").notEmpty();
const _requiredLastName = check("lastName", "Lastname field is required").notEmpty();
const _requiredPassword = check("password", "Password field is required").notEmpty();
const _uniqueEmail = check("email").custom(async email => {
  const user = await userService.findByEmail(email);

  if (user) {
    throw new Error("Email is already in used. Please try with a different email address.",);
  }
});

// GRUPO DE VALIDACIONES
const loginValidations = [
  _validEmail,
  _requiredEmail,
  _requiredPassword,
  checkValidations,
];

const registerValidations = [
  _requiredEmail,
  _validEmail,
  _uniqueEmail,
  _requiredFirstName,
  _requiredLastName,
  _requiredPassword,
  checkValidations,
];

module.exports = { loginValidations, registerValidations};
