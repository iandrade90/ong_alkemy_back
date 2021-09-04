const {mainData} = require('../services/orgService')

const getOrganizationData = async(req, res) => {
    try {
        console.log(mainData())
        const data = await mainData()
        res.json(data)
    } catch (error) {
      res.json(error)
    }
}

module.exports = {
    getOrganizationData
}