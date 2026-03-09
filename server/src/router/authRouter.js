const userLogin = require("../controllers/users/loginController");
const handelLogout = require("../controllers/users/logOutcontroller");
const handelProtectedRoute = require("../controllers/users/protectedController");
const handelRefreshToken = require("../controllers/users/refreshToken");
const isLoggedIn = require("../middleware/isLogIn");
const isLogOut = require("../middleware/isLogOut");
const { validateUserLogin } = require("../validation/auth");
const runValidation = require("../validation/run");

const routerAuth = require("express").Router();

routerAuth.post(
  "/login",
  validateUserLogin,
  runValidation,
  isLogOut,
  userLogin,
);
routerAuth.post("/logout", isLoggedIn, handelLogout);

routerAuth.get("/refresh-token",handelRefreshToken);
routerAuth.get("/protected",handelProtectedRoute);

module.exports = routerAuth;
