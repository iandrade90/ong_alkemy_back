const express = require("express")
const { loginController, registerController } = require("../controllers/authControllers")
const { loginValidations, registerValidations } = require("../middlewares/auth")
const router = express.Router()

router.post(loginURL,loginValidations, loginController)

router.post(loginURL, loginValidations, login);
router.post("/auth/register", registerValidations, registerController);


module.exports = router;
