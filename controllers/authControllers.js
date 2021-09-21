const authService = require('../services/authService')
const userService = require('../services/userService')
const { generateToken, decryptToken } = require('../services/tokenService')
const bcrypt = require('bcrypt')

const forbiddenMsg = (res) => {
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
              : forbiddenMsg(res)
     }) : forbiddenMsg(res);
  })
  .catch(error => next(error))
}
const registerController = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = { firstName, lastName, email, password };
  try {
    const userCreated = await userService.save(newUser);
    //* OP: el ticket especifica que se debe devolver el usuario creado, en un futuro esto debe cambiarse
    res.status(201).json(userCreated);
  } catch (error) {
    next(error);
  }
};

const tokenController = (req, res, next) => {
  const { id } = decryptToken(req.token)
  id && authService.findUserById(id)
    .then(userFound => {
      userFound ? res.status(200).json(userFound) :
        forbiddenError(res)
    })
  .catch(error => next(error))
    
  
}


module.exports = {
  loginController,
  tokenController,
  registerController
}
