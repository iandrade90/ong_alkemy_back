const Repository = require("../repositories");
const bcrypt = require("bcrypt");
const userRepository = new Repository();

exports.save = async userPayload => {
  //? Password encryption
  userPayload.password = await bcrypt.hash(userPayload.password, 10);

  return await userRepository.createPayload("User", userPayload);
};


exports.findByEmail = async email => {
    return await userRepository.findByParams("User", { email })
}