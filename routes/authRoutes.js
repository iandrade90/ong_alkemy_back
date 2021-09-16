const express = require("express")
const { login } = require("../controllers/authControllers")
const { loginValidations } = require("../middlewares/auth")
const router = express.Router()

const loginURL = '/auth/login'

router.post(loginURL,loginValidations, login)


module.exports = router