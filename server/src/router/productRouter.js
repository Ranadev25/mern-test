const productRouter = require("express").Router();
const runValidation = require("../validation/run");
const isAdmin = require("../middleware/isAdmin");
const isLoggedIn = require("../middleware/isLogIn");


productRouter.get("/")

module.exports = productRouter;