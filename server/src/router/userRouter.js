const router = require("express").Router();
const deleteUser = require("../controllers/deleteUserControllers");
const findUserById = require("../controllers/findUserByIdController");
const registerUser = require("../controllers/registerControllers");
const { userGet } = require("../controllers/userPaginationControllers");

// get user by pagination
router.get("/", userGet);

// get user by id
router.get("/:id", findUserById);

// delete user by id
router.delete("/:id", deleteUser);

router.post("/register",registerUser);

module.exports = router;
