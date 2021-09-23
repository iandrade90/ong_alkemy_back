const express = require("express");
const { putNews, getNews, getEntry } = require("../controllers/entriesControllers");
const router = express.Router();

router.get('/news', getNews);

/* GET NEWS:id */
/* El ticket especifica que se debe ser usuario administrador pero de momento no esta disponible esa funcionalidad. */
router.get("/news/:id", getEntry);

/* Put NEWS:id */
/* El ticket especifica que se debe ser usuario administrador pero de momento no esta disponible esa funcionalidad. */
router.put("/news/:id", putNews);

module.exports = router;
