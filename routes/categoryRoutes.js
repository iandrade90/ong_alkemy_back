const express = require("express");
const router = express.Router();
const { isAdmin } = require("../middlewares/auth");
const { tokenExists } = require("../middlewares/token");
const { createCategory } = require("../controllers/categoryControllers");
const createValidation = require("../middlewares/categoryValidation");

router.post(
  "/category",
  tokenExists,
  isAdmin,
  createValidation,
  createCategory
);

module.exports = router;
