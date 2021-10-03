const express = require("express");
const { getMembers, createMember, deleteMember, updateMember } = require("../controllers/memberController");
const { createValidations, } = require("../middlewares/members");
const router = express.Router();

//! OP: Revisar validaciones correspondientes
router.get("/members", getMembers);
router.post("/members", createValidations, createMember);
router.delete("/members/:id", deleteMember)
router.put("/members/:id", updateMember)

module.exports = router;
