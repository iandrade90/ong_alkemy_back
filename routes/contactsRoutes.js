const router = require('express').Router();
const { createContact, contactList } = require('../controllers/contactControllers');
const createContactValidation = require("../middlewares/contact");
const { isAdmin } = require('../middlewares/auth');
const { tokenExists } = require('../middlewares/token');

router.get('/contacts', [tokenExists, isAdmin], contactList);

router.post("/contacts", tokenExists, createContactValidation, createContact);

module.exports = router;
