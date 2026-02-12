const userLogin = require("../controllers/loginController");
const handelLogout = require("../controllers/logOutcontroller");
const isLoggedIn = require("../middleware/isLogIn");
const isLogOut = require("../middleware/isLogOut");
const { validateUserLogin } = require("../validation/auth");
const runValidation = require("../validation/run");

const routerAuth = require("express").Router();

routerAuth.post("/login",validateUserLogin,runValidation, isLogOut, userLogin);
routerAuth.post("/logout",isLoggedIn, handelLogout);



module.exports = routerAuth