const authService = require("../services/authService");
const bcrypt = require("bcrypt");

const login = (req, res, next) => {
  const { email, password } = req.body;
  const reqPassword = password;
  authService
    .findUserByEmail(email)
    .then(response => {
      const { email, password } = response;
      bcrypt.compare(reqPassword, password).then(response => {
        response
          ? res.status(200).json({ email, password })
          : res.status(401).json({ ok: false });
      });
    })
    .catch(error => next(error));
};

const register = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = { firstName, lastName, email, password };

  try {
    const userCreated = await authService.register(newUser);
    //* OP: el ticket especifica que se debe devolver el usuario creado, en un futuro esto debe cambiarse
    res.status(201).json(userCreated);
  } catch (error) {
    //? El error catcheado es enviado al Error Handler para que sea manejado
    next(error);
  }
};

module.exports = { login, register };
