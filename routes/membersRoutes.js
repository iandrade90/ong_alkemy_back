const express = require("express");
const { getMembers, createMember } = require("../controllers/memberController");
const { createValidations } = require("../middlewares/members");
const router = express.Router();

//! Revisar validaciones correspondientes

router.get("/members", getMembers);
router.post("/members", createValidations, createMember);

module.exports = router;
