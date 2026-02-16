const router = require("express").Router();
// const handelBannedUser = require("../controllers/bannedUserControllers");
const deleteUser = require("../controllers/deleteUserControllers");
const findUserById = require("../controllers/findUserByIdController");
const handelForgetPassword = require("../controllers/forgotPassword");
const handelManageUser = require("../controllers/manageUserController");
const registerUser = require("../controllers/registerControllers");
const handleResetPassword = require("../controllers/reset_password");
const updatePassword = require("../controllers/updataPassword");
// const handelUnBannedUser = require("../controllers/unBannedControllers");
const updataUser = require("../controllers/updataUserById");
const { userGet } = require("../controllers/userPaginationControllers");
const activateUser = require("../controllers/verifyedUserController");
const isAdmin = require("../middleware/isAdmin");
const isLoggedIn = require("../middleware/isLogIn");
const isLogOut = require("../middleware/isLogOut");
const upload = require("../third-party/multer");
const { validateUserRegistration, validateUserPasswordUpdate, validateUserForgetPassword } = require("../validation/auth");
const runValidation = require("../validation/run");

// get user by pagination
router.get("/", isLoggedIn, isAdmin, userGet);

// get user by id
router.get("/:id", isLoggedIn, isAdmin, findUserById);

// delete user by id
router.delete("/:id", isLoggedIn, isAdmin, deleteUser);

//
router.post(
  "/register",
  upload.single("image"),
  isLogOut,
  validateUserRegistration,
  runValidation,
  registerUser,
);

router.post("/verify", isLogOut, activateUser);

router.put("/:id", upload.single("image"), isLoggedIn, updataUser);

router.put("/manage-user/:id", isLoggedIn, isAdmin, handelManageUser);

router.put("/update-password/:id", validateUserPasswordUpdate, runValidation, isLoggedIn, updatePassword);

router.post("/forget-password", validateUserForgetPassword, runValidation, handelForgetPassword);


router.put("/reset-password", validateUserForgetPassword, runValidation, handleResetPassword);


module.exports = router;
