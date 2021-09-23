const express = require('express');
const { getOrganizationData } = require('../controllers/organization');
const router = express.Router()


router.get('/organizations/1/public', getOrganizationData)

module.exports = router;
