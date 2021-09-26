exports.errorHandler = (message, code, data) => {
    const error = {
        message: message,
        code: code,
        data: data
    }

    return error;
}
