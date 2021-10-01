const router = require('express').Router();
const {contactList} = require('../controllers/contactControllers');
const {isAdmin} = require('../middlewares/auth');
const {tokenExists} = require('../middlewares/token');

router.get('/contacts', [tokenExists, isAdmin], contactList);

module.exports = router;