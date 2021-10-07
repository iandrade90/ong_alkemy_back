const express = require("express");
const router = express.Router();
const {
  getActivity,
  createActivity,
  updateActivity,
  getActivities,
  deleteActivity,
} = require("../controllers/activityControllers");

const createActivityValidation = require("../middlewares/activityMiddleware");
const { isAdmin } = require("../middlewares/auth");
const { tokenExists } = require("../middlewares/token");

router.get("/activities", tokenExists, isAdmin, getActivities);
router.get("/activities/:id", tokenExists, isAdmin, getActivity);
router.post("/activities", tokenExists, isAdmin, createActivityValidation, createActivity);
router.put("/activities/:id", tokenExists, isAdmin, updateActivity);
router.delete("/activities/:id", tokenExists, isAdmin, deleteActivity);

module.exports = router;
