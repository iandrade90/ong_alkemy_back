var express = require('express');
const { deleteUser } = require('../controllers/userControllers');
var router = express.Router();

/* GET users listing. */
router.delete('/:id', deleteUser)

module.exports = router;
