const express = require("express");
const { putEntry } = require("../controllers/entriesControllers");
const router = express.Router();

/* Put NEWS:id */
/* El ticket especifica que se debe ser usuario administrador pero de momento no esta disponible esa funcionalidad. */
router.put("/news/:id", putEntry);

module.exports = router;
