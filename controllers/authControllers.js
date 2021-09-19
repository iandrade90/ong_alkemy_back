const authService = require('../services/authService')
const { generateToken } = require('../services/tokenService')
const bcrypt = require('bcrypt')

const forbiddenError = (res) => {
  return res.status(401).json({ ok: false })
}

const loginController = (req, res, next) => {
  const {email, password} = req.body
  const reqPassword = password
  authService.findUserByEmail(email)
    .then(userFound => {
      userFound ? bcrypt.compare(reqPassword, userFound.password)
        .then(passwordMatch => {
            passwordMatch ? res.status(200).json({
              id: userFound.id,
              email: userFound.email,
              roleId: userFound.roleId,
              token: generateToken(userFound)
            })
              : forbiddenError(res)
     }) : forbiddenError(res);
  })
  .catch(error => next(error))
}


module.exports = {loginController}