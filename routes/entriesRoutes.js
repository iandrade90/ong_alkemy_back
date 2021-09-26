const express = require("express");
const { putEntry, getNews, getEntry } = require("../controllers/entriesControllers");
const router = express.Router();


router.get('/news', getNews);
router.get("/news/:id", getEntry);

router.put("/news/:id", putEntry);

module.exports = router;
