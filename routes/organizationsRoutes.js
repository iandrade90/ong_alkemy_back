const express = require("express");
const { findPublicOrganizations, updateOrganization } = require("../controllers/organizationControllers");

const router = express.Router();

router.get("/organizations/:id/public", findPublicOrganizations);

router.put('/organizations/:id', updateOrganization)

module.exports = router;
