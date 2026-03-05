const { seedData } = require("../controllers/seedController");
const seedProducts = require("../controllers/seedProducts");
const upload = require("../third-party/multer");

const seedRouter = require("express").Router();

seedRouter.get("/", upload.single("image"), seedData);

seedRouter.get("/products",upload.single("image"), seedProducts);


module.exports = seedRouter;