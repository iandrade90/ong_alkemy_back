const organizationRepository = require('../repositories/organizationRepository')
const repository = new organizationRepository()

const mainData = () => {
    return repository.mainInfo()
}

module.exports = {
    mainData
}