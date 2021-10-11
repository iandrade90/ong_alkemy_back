const router = require('express').Router();
const { createContact, contactList, deleteContact } = require('../controllers/contactControllers');
const createContactValidation = require("../middlewares/contact");
const { isAdmin } = require('../middlewares/auth');
const { tokenExists } = require('../middlewares/token');

router.get('/contacts', [tokenExists, isAdmin], contactList);

router.post("/contacts", tokenExists, createContactValidation, createContact);

router.delete('/contacts/:id', [tokenExists, isAdmin], deleteContact);

module.exports = router;
