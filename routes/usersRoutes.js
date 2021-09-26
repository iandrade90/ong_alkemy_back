var express = require('express');
const { deleteUser, getUsersList } = require('../controllers/userControllers');
var router = express.Router();
const {tokenExists} = require('../middlewares/token');
const {isAdmin} = require('../middlewares/auth');

/* GET users listing. */
router.delete('/:id', deleteUser)

router.get('/users-list', [tokenExists, isAdmin], getUsersList)

module.exports = router;