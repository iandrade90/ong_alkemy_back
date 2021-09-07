const { Router } = require("express");
const { register, login, getMyData } = require("../controllers/auth");
const { postRegisterValidations, postLoginValidations, _validJWT } = require("../middlewares/auth");


const router = Router();

//* Esta es la estructura de ruta que utilice para realizar las pruebas de funcionamiento
router.get("/me", _validJWT, getMyData)
router.post("/register", postRegisterValidations, register);
router.post("/login", postLoginValidations, login)

module.exports = router;
