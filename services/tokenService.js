const jwt = require('jsonwebtoken')
const {development} = require('../config/config')

exports.generateToken = authenticatedUser => {
    const { id, email, roleId } = authenticatedUser
   return jwt.sign({
        id,
        email,
        roleId,
    }, development.secret,
    {expiresIn: '1 day'})
}