const express = require("express");
// const createValidation = require("../middlewares/entriesValidation");
const {
    getCategories
} = require("../controllers/categoriesControllers");
const { isAdmin } = require("../middlewares/auth");
const { tokenExists } = require("../middlewares/token");
const router = express.Router();

router.get("/categories", getCategories);

module.exports = router;
