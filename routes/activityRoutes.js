const express = require("express");
const router = express.Router();
const { getActivity, createActivity } = require("../controllers/activityControllers");


const createActivityValidation = require("../middlewares/activityMiddleware");
const { isAdmin } = require("../middlewares/auth");
const { tokenExists } = require("../middlewares/token");


router.get("/:id", tokenExists, isAdmin, getActivity);

router.post("/", tokenExists, isAdmin, createActivityValidation, createActivity);

module.exports = router;
