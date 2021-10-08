const express = require("express");
// const createValidation = require("../middlewares/entriesValidation");
const {
  getCategories,
  putCategories,
  deleteCategories,
} = require("../controllers/categoriesControllers");
const { isAdmin } = require("../middlewares/auth");
const { tokenExists } = require("../middlewares/token");
const router = express.Router();

router.get("/categories", tokenExists, isAdmin, getCategories);

router.put("/categories/:id", tokenExists, isAdmin, putCategories);

router.delete("/categories/:id", tokenExists, isAdmin, deleteCategories);

module.exports = router;
