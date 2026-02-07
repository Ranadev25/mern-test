const router = require("express").Router();
const deleteUser = require("../controllers/deleteUserControllers");
const findUserById = require("../controllers/findUserByIdController");
const registerUser = require("../controllers/registerControllers");
const { userGet } = require("../controllers/userPaginationControllers");
const activateUser = require("../controllers/verifyedUserController");
const upload = require("../service/multer");
const validateUserRegistration = require("../validation/auth");
const runValidation = require("../validation/run");


// get user by pagination
router.get("/", userGet);

// get user by id
router.get("/:id", findUserById);

// delete user by id
router.delete("/:id", deleteUser);

router.post("/register", upload.single("image"), validateUserRegistration,runValidation, registerUser);


router.post("/verify", activateUser);
// router.post("/signing");



module.exports = router;
