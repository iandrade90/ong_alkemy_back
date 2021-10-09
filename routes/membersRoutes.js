const express = require("express");
const {
  getMembers,
  createMember,
  deleteMember,
  updateMember,
} = require("../controllers/memberController");
const { createValidations } = require("../middlewares/members");
const { isAdmin } = require("../middlewares/auth");
const { tokenExists } = require("../middlewares/token");
const router = express.Router();

//! OP: Revisar validaciones correspondientes
router.get("/members", getMembers);
router.post("/members", tokenExists, isAdmin, createValidations, createMember);
router.delete("/members/:id", tokenExists, isAdmin, deleteMember);
router.put("/members/:id", tokenExists, isAdmin, updateMember);

module.exports = router;
