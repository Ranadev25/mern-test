const { seedData } = require("../controllers/seedController");
const upload = require("../service/multer");

const seedRouter = require("express").Router();

seedRouter.get("/",upload.single("image"), seedData);


module.exports = seedRouter;