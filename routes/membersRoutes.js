const express = require("express");
const { getMembers, createMember, deleteMember } = require("../controllers/memberController");
const { createValidations, deleteValidations } = require("../middlewares/members");
const router = express.Router();

//! OP: Revisar validaciones correspondientes
router.get("/members", getMembers);
router.post("/members", createValidations, createMember);
router.delete("/members/:id", deleteMember)

module.exports = router;
