const getAllUser = require("../controllers/userControllers.js/getAllUserController");
const insertSeedData = require("../controllers/userControllers.js/insertSeedDataController");

const UserRouter = require("express").Router();


UserRouter.get("/users", getAllUser)
UserRouter.post("/seed", insertSeedData)


module.exports = UserRouter