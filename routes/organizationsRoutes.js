const express = require("express")
const { findPublicOrganizations } = require("../controllers/organizationControllers")

const router = express.Router()

const organizationsURL = '/organizations/:id/public'

router.get(organizationsURL, findPublicOrganizations)


module.exports = router