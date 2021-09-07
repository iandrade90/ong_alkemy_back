const { Organization } = require("../models");



class organizationRepository{
    constructor() { }

    async mainInfo() {
        return await Organization.findOne()
    }
}

module.exports = organizationRepository