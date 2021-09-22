const express = require("express");
const { getEntry } = require("../controllers/entries");
const router = express.Router();

/* GET NEWS:id */
/* El ticket especifica que se debe ser usuario administrador pero de momento no esta disponible esa funcionalidad. */
router.get("/news/:id", getEntry);

module.exports = router;
