var express = require('express');
const { deleteUser, usersList } = require('../controllers/userControllers');
var router = express.Router();
const { tokenExists } = require('../middlewares/token');
const { isAdmin } = require('../middlewares/auth');

/* GET users listing. */
router.delete('/users/:id', deleteUser)

router.get('/users', usersList)

module.exports = router;