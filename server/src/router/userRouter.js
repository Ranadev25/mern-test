const router = require("express").Router();
// const handelBannedUser = require("../controllers/bannedUserControllers");
const deleteUser = require("../controllers/users/deleteUserControllers");
const findUserById = require("../controllers/users/findUserByIdController");
const handelForgetPassword = require("../controllers/users/forgotPassword");
const handelManageUser = require("../controllers/users/manageUserController");
const registerUser = require("../controllers/users/registerControllers");
const handleResetPassword = require("../controllers/users/reset_password");
const updatePassword = require("../controllers/users/updataPassword");
// const handelUnBannedUser = require("../controllers/unBannedControllers");
const updataUser = require("../controllers/users/updataUserById");
const { userGet } = require("../controllers/users/userPaginationControllers");
const activateUser = require("../controllers/users/verifyedUserController");
const isAdmin = require("../middleware/isAdmin");
const isLoggedIn = require("../middleware/isLogIn");
const isLogOut = require("../middleware/isLogOut");
const upload = require("../third-party/multer");
const {
  validateUserRegistration,
  validateUserPasswordUpdate,
  validateUserForgetPassword,
  validateUserResetPassword,
} = require("../validation/auth");
const runValidation = require("../validation/run");

// get user by pagination
router.get("/", isLoggedIn, isAdmin, userGet);

// get user by id
router.get(`/:id`, isLoggedIn, isAdmin, findUserById);

// delete user by id
router.delete(`/:id`, isLoggedIn, isAdmin, deleteUser);

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

router.put(
  "/reset-password",
  validateUserResetPassword,
  runValidation,
  handleResetPassword,
);

router.put(`/:id`, upload.single("image"), isLoggedIn, updataUser);

router.put(`/manage-user/:id`, isLoggedIn, isAdmin, handelManageUser);

router.put(
  `/update-password/:id`,
  validateUserPasswordUpdate,
  runValidation,
  isLoggedIn,
  updatePassword,
);

router.post(
  "/forget-password",
  validateUserForgetPassword,
  runValidation,
  handelForgetPassword,
);


module.exports = router;
