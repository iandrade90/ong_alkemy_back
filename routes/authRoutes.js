const express = require("express")
const { loginController } = require("../controllers/authControllers")
const { loginValidations } = require("../middlewares/auth")
const router = express.Router()

const loginURL = '/auth/login'

router.post(loginURL,loginValidations, loginController)


module.exports = router