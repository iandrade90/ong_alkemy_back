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

router.get("/news", tokenExists, getNews);

/* GET NEWS:id */
/* El ticket especifica que se debe ser usuario administrador pero de momento no esta disponible esa funcionalidad. */
router.get("/news/:id", getEntry);

/* Put NEWS:id */
/* El ticket especifica que se debe ser usuario administrador pero de momento no esta disponible esa funcionalidad. */
router.put("/news/:id", putNews);

router.delete('/news/:id', tokenExists, deleteNews);

module.exports = router;
