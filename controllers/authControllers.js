const authService = require('../services/authService')
const userService = require('../services/userService')
const { generateToken, decryptToken } = require('../services/tokenService')
const bcrypt = require('bcrypt')
const { EmailSendgrid } = require('../services/sendgrid')

const forbiddenMsg = (res, msg) => {
  return res.status(401).json(msg)
}

const loginController = (req, res, next) => {
  const {email, password} = req.body
  const reqPassword = password
  authService.findUserByEmail(email)
    
  .then(userFound => {
   userFound ? bcrypt.compare(reqPassword, userFound.password)
      .then(passwordMatch => {
         passwordMatch ? res.status(200).json({
           token: generateToken(userFound),
           user:{
             id: userFound.id,
             email: userFound.email,
             firstName: userFound.firstName,
             lastName: userFound.lastName,
             image: userFound.image,
             roleId: userFound.roleId === 1,
           }
         }): forbiddenMsg(res, "Failed in authentication, wrong email or password")
     }) : forbiddenMsg(res, "Failed in authentication, wrong email or password");
  })
  .catch(error => next(error))
}
const registerController = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = { firstName, lastName, email, password };
  try {
    const userCreated = await userService.save(newUser);

    EmailSendgrid(userCreated.email, "Bienvenido a nuestra plataforma", "la vas a pasar", "<strong> MUY BIEN </strong>")

    res.status(201).json(userCreated);
  } catch (error) {
    next(error);
  }
};

const tokenController = (req, res, next) => {
  const { id } = req.data
  id && authService.findUserById(id)
    .then(userFound => {
      userFound ? res.status(200).json(userFound) :
        forbiddenError(res, "Failed in token authentication")
    })
  .catch(error => next(error))
    
  
}


module.exports = {
  loginController,
  tokenController,
  registerController
}
