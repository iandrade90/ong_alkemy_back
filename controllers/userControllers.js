const userService = require('../services/userService')

const deleteUser = (req, res, next) => {
    const { id } = req.params
    userService.deleteUserById(id)
        .then(resolved => {
           
            resolved ? res.status(200).json("User was deleted succesfully") :
            res.status(404).json("Doesn´t exist a User with that ID (or was already deleted)") 
    })
}

const getUsersList = async (req, res, next) => {
    try {
        const list = await userService.findAllUsers()
        !list 
        ? res.status(200).json({message: 'No se encontraron usuarios.'})
        : res.status(200).json(list)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    deleteUser,
    getUsersList
}