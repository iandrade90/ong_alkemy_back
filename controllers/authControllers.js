const authService = require("../services/authService");
const userService = require("../services/userService");
const { generateToken, decryptToken } = require("../services/tokenService");
const bcrypt = require("bcrypt");

const forbiddenMsg = (res) => {
  return res.status(401).json({ ok: false });
};

const loginController = (req, res, next) => {
  const { email, password } = req.body;
  const reqPassword = password;
  authService
    .findUserByEmail(email)
    .then((userFound) => {
      userFound
        ? bcrypt
            .compare(reqPassword, userFound.password)
            .then((passwordMatch) => {
              passwordMatch
                ? res.status(200).json({
                    id: userFound.id,
                    email: userFound.email,
                    roleId: userFound.roleId,
                    token: generateToken(userFound),
                  })
                : forbiddenMsg(res);
            })
        : forbiddenMsg(res);
    })
    .catch((error) => next(error));
};
const registerController = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = { firstName, lastName, email, password };
  try {
    const userCreated = await userService.save(newUser);

    //Realizo la busqueda en la DB porque voy a necesitar el parametro roleId que no lo tengo en el formulario
    const responseRegister = await authService
      .findUserByEmail(newUser.email)
      .then((userFound) => {
        return {
          id: userFound.id,
          email: userFound.email,
          roleId: userFound.roleId,
          token: generateToken(userFound),
        };
      });
    res.status(201).json(responseRegister);
  } catch (error) {
    next(error);
  }
};

const tokenController = (req, res, next) => {
  const { id } = decryptToken(req.token);
  id &&
    authService
      .findUserById(id)
      .then((userFound) => {
        userFound ? res.status(200).json(userFound) : forbiddenError(res);
      })
      .catch((error) => next(error));
};

module.exports = {
  loginController,
  tokenController,
  registerController,
};
