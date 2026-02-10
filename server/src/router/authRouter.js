const userLogin = require("../controllers/loginController");

const routerAuth = require("express").Router();

routerAuth.post("/login",userLogin)


module.exports = routerAuth