const categoryRouter = require("express").Router();
const handelCreateCategory = require("../controllers/categoryControllers");
const registerUser = require("../controllers/registerControllers");
const updataUser = require("../controllers/updataUserById");
const { userGet } = require("../controllers/userPaginationControllers");
const activateUser = require("../controllers/verifyedUserController");
const isAdmin = require("../middleware/isAdmin");
const isLoggedIn = require("../middleware/isLogIn");
const isLogOut = require("../middleware/isLogOut");
const upload = require("../third-party/multer");
const { validateCategory } = require("../validation/category");
const runValidation = require("../validation/run");




categoryRouter.post("/",validateCategory, runValidation,isLoggedIn, isAdmin, handelCreateCategory)




module.exports = categoryRouter;
