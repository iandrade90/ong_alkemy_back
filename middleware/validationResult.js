const { validationResult } = require('express-validator');
const { errorHandler } = require('../error/index');

exports.customValidationResult = (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        throw errorHandler("Validation Failed", 400, errors.errors);
    }

    next();
}