
const Repository = require("../repositories")
const authRepository = new Repository
const entity = "User"

exports.findUserByEmail = email => {
    const params = {"email": email}
    return authRepository.findByParams(entity, params)
}

exports.finUserById = id => {
    return authRepository.findById(entity, id)
}