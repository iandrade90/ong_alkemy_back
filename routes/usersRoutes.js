var express = require('express');
const { deleteUser } = require('../controllers/userControllers');
var router = express.Router();

/* GET users listing. */
router.delete('/users/:id', deleteUser)

module.exports = router;