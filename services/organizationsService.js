
const Repository = require("../repositories")
const organizationRepository = new Repository
const entity = "Organization"

exports.findOrganizationById = async id => {
   return organizationRepository.findById(entity, id)
}