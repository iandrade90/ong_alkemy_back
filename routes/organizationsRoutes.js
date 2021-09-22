const express = require("express")
const { findPublicOrganizations } = require("../controllers/organizationControllers")

const router = express.Router()

router.get('/:id/public', findPublicOrganizations)


module.exports = router