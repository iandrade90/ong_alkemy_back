const bcrypt = require("bcrypt");
const { User } = require("../models");


class UserRepository {
  constructor() {}

  async save(user) {
    //? Encriptacion de la contraseña con 'bcrypt' antes de ser guardada en la base de datos
    user.password = await bcrypt.hash(user.password, 10);

    //? Creacion del usuario en la base de datos y devulve el usuario creado
    //! [REVISAR] : definir el modelo correcto de usuario ya que se utiliza el modelo que viene por default
    return await User.create(user);
  }

  async findByEmail(email) {
    return await User.findOne({ where: { email }});
  }
}

module.exports = UserRepository;
