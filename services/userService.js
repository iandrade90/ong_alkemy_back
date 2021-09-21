const Repository = require("../repositories")
const userRepository = new Repository
const entity = "User"

exports.deleteUserById = id => {
    return userRepository.deleteById(entity, id)
}
