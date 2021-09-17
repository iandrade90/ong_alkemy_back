const { findOrganizationById } = require("../services/organizationsService")


exports.findPublicOrganizations = (req, res, next) => {
    const { id } = req.params
   return findOrganizationById(id)
 }