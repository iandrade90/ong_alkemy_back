var express = require('express');
const { deleteUser } = require('../controllers/userControllers');
const { getUsersList } = require('../services/userService');
var router = express.Router();
const { tokenExists } = require('../middlewares/token');
const { isAdmin } = require('../middlewares/auth');

/* GET users listing. */
router.delete('/users/:id', deleteUser)

router.get('/users', [tokenExists, isAdmin], getUsersList)

module.exports = router;