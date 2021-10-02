const userService = require('../services/userService')

const deleteUser = (req, res, next) => {
    const { id } = req.params
    userService.deleteUserById(id)
        .then(resolved => {
           
            resolved ? res.status(200).json("User was deleted succesfully") :
            res.status(404).json("Doesn´t exist a User with that ID (or was already deleted)") 
    })
}
module.exports = {
    deleteUser
}