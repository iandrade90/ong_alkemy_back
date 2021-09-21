const express = require("express")
const { loginController, tokenController, registerController } = require("../controllers/authControllers")
const { loginValidations, registerValidations } = require("../middlewares/auth")
const { tokenExists } = require("../middlewares/token")
const router = express.Router()



router.post('/login', loginValidations, loginController)
router.post("/register", registerValidations, registerController);

router.get('/me', tokenExists, tokenController)

module.exports = router;
