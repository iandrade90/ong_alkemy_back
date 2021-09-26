const { validationResult } = require("express-validator");

exports.customValidationResult = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) { 
    // Momentaneamente manejo los errores de esta manera
    return  next( {
         message: "Validation failed",
         status: 400,
         details: errors.errors,
       },)
   }
  next();
};
