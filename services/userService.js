const Repository = require("../repositories");
const userRepository = new Repository();
const entity = "User";
const bcrypt = require("bcrypt");


exports.save = async userPayload => {
  //? Password encryption
  userPayload.password = await bcrypt.hash(userPayload.password, 10);

  return await userRepository.createPayload(entity, userPayload);
};

exports.findByEmail = async email => {
  return await userRepository.findByParams(entity, { email });
};

exports.deleteUserById = id => {
  return userRepository.deleteById(entity, id);
};

exports.findAllUsers = async () => {
  return await userRepository.findAll(entity);
};
