
const userRepository = require("../repositories/userRepository");
const repository = new userRepository();

const save = async user => {
  return repository.save(user);
};

const findByEmail = async email => {
  return repository.findByEmail(email);
};



module.exports = {
  save,
  findByEmail,
};
