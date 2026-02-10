const { seedData } = require("../controllers/seedController");

const seedRouter = require("express").Router();

seedRouter.get("/", seedData);


module.exports = seedRouter;