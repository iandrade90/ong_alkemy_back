const express = require("express");
const createValidation = require("../middlewares/entriesValidation");
const {
  putNews,
  getNews,
  getEntry,
  postNews,
  deleteNews,
} = require("../controllers/entriesControllers");
const { isAdmin } = require("../middlewares/auth");
const { tokenExists } = require("../middlewares/token");
const router = express.Router();

/* Obtiene todas las entries de tipo news */
router.get("/news", tokenExists, isAdmin, getNews);

/* Obtiene una entry especificada por su id */
router.get("/news/:id", tokenExists, isAdmin, getEntry);

/* Edita una entry especificada por su id */
router.put("/news/:id", tokenExists, isAdmin, putNews);

/* Crea una nueva entry de tipo news */
router.post("/news", tokenExists, isAdmin, createValidation, postNews);

/* Elimina una entry especificada por su id */
router.delete("/news/:id", tokenExists, isAdmin, deleteNews);

module.exports = router;
