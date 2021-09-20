const express = require("express")
const { loginController, tokenController } = require("../controllers/authControllers")
const { loginValidations } = require("../middlewares/auth")
const { tokenExists } = require("../middlewares/token")
const router = express.Router()



router.post('/login', loginValidations, loginController)

router.get('/me', tokenExists, tokenController)

module.exports = router