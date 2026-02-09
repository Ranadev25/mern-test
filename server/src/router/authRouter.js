const handelLogin = require("../controllers/loginAuthControllers");

const authRouter = require("express").Router()

authRouter.post("/login",handelLogin)

module.exports = authRouter;