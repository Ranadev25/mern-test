const router = require("express").Router();
const deleteUser = require("../controllers/deleteUserControllers");
const findUserById = require("../controllers/findUserByIdController");
const registerUser = require("../controllers/registerControllers");
const updataUser = require("../controllers/updataUserById");
const { userGet } = require("../controllers/userPaginationControllers");
const activateUser = require("../controllers/verifyedUserController");
const isLoggedIn = require("../middleware/isLogIn");
const isLogOut = require("../middleware/isLogOut");
const upload = require("../service/multer");
const validateUserRegistration = require("../validation/auth");
const runValidation = require("../validation/run");

// get user by pagination
router.get("/", userGet);

// get user by id
router.get("/:id", findUserById);

// delete user by id
router.delete("/:id",isLoggedIn,  deleteUser);

//
router.post("/register", upload.single("image"),
  isLogOut,validateUserRegistration, runValidation, registerUser);

router.post("/verify",isLogOut, activateUser);

router.put("/:id",upload.single("image"),isLoggedIn, updataUser);


module.exports = router;
