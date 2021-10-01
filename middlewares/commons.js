const { validationResult } = require("express-validator");

exports.customValidationResult = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // Momentaneamente manejo los errores de esta manera
    throw {
      error: {
        message: "Validation failed",
        code: 400,
        details: errors.errors,
      },
    };
  }

  next();
};
