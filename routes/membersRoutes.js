const express = require("express");
const { getMembers } = require("../controllers/memberController");
const router = express.Router();

//! Revisar validaciones correspondientes

router.get("/members", getMembers);

module.exports = router;
