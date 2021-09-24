const express = require("express");
const createValidation = require("../middlewares/entriesValidation");
const {
  putNews,
  getNews,
  getEntry,
  postNews,
} = require("../controllers/entriesControllers");
const { isAdmin } = require("../middlewares/auth");
const { tokenExists } = require("../middlewares/token");
const router = express.Router();

router.get("/news", getNews);

/* Obtiene una entry especificada por su id */
router.get("/news/:id", getEntry);

/* Edita una entry */
router.put("/news/:id", tokenExists, isAdmin, putNews);

/* Crea una nueva entry de tipo news */
router.post("/news", tokenExists, isAdmin, createValidation, postNews);

module.exports = router;
