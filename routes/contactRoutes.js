const express = require("express");
const router = express.Router();

const { createContact } = require("../controllers/contactControllers");
const createContactValidation = require("../middlewares/contact");

const { tokenExists } = require("../middlewares/token");


router.post("/contacts", tokenExists, createContactValidation, createContact);


module.exports = router;