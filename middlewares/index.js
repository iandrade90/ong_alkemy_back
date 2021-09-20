const {validationResult} = require("express-validator")

exports.customValidationResult = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new AppError("Validation failed", 400, errors.errors);
  }

  next();
};

