const { seedData } = require("../controllers/seedController");

const seedRouter = require("express").Router();

seedRouter.get("/users", seedData);


module.exports = seedRouter;