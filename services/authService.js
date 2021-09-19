const Repository = require("../repositories");
const authRepository = new Repository();
const entity = "User";
const userService = require("../services/userService");

exports.findUserByEmail = email => {
  const params = { email: email };
  return authRepository.findByParams(entity, params);
};

exports.register = async user => {
  try {
    return await userService.save(user);
  } catch (err) {
    throw err;
  }
};

