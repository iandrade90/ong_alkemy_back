const express = require("express");
const {
  loginController,
  tokenController,
  registerController,
  updateUser,
} = require("../controllers/authControllers");
const {
  loginValidations,
  registerValidations,
} = require("../middlewares/auth");
const { tokenExists } = require("../middlewares/token");
const router = express.Router();

router.post("/auth/login", loginValidations, loginController);
router.post("/auth/register", registerValidations, registerController);
router.put("/auth/:id", tokenExists, updateUser);
router.get("/auth/me", tokenExists, tokenController);

module.exports = router;
