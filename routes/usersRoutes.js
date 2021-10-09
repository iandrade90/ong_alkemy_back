var express = require("express");
const { deleteUser, usersList, updateUser } = require("../controllers/userControllers");
var router = express.Router();
const { tokenExists } = require("../middlewares/token");
const { isAdmin } = require("../middlewares/auth");

/* GET users listing. */
router.delete("/users/:id", [tokenExists, isAdmin], deleteUser);
router.get("/users", [tokenExists, isAdmin], usersList);
router.put("/users/:id", [tokenExists, isAdmin], updateUser);

module.exports = router;
