const express = require("express");
const { login, register } = require("../controllers/authControllers");
const { loginValidations, registerValidations } = require("../middlewares/auth");

const router = express.Router();

const loginURL = "/auth/login";

router.post(loginURL, loginValidations, login);
router.post("/auth/register", registerValidations, register);


module.exports = router;
