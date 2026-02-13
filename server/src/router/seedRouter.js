const { seedData } = require("../controllers/seedController");
const upload = require("../third-party/multer");

const seedRouter = require("express").Router();

seedRouter.get("/",upload.single("image"), seedData);


module.exports = seedRouter;