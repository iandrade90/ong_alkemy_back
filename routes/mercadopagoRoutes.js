const express = require("express");
const router = express.Router();
const  { createDonation }  = require("../controllers/mercadopagoController");

router.post("/donations", createDonation);

module.exports = router;
