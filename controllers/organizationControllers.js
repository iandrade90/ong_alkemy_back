const { findOrganizationById } = require("../services/organizationsService")


exports.findPublicOrganizations = (req, res, next) => {
    const { id } = req.params
    findOrganizationById(id)
        .then(response => {
            !!response ? res.status(200).json(response) :
                res.status(404).json("No hay organizacion con ese ID")
        })
    .catch(error => next(error))
 }