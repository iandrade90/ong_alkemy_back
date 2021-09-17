
const Repository = require("../repositories")
const organizationRepository = new Repository
const entity = "Organization"

exports.findOrganizationById = id => {
    return organizationRepository.findById(entity, id)
}