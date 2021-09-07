const express = require('express');
const { getOrganizationData } = require('../controllers/organization');
const router = express.Router()


router.get('/1/public', getOrganizationData)

module.exports = router;
