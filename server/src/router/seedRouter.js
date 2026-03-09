const { seedData, seedProducts } = require("../controllers/seedController");
const upload = require("../third-party/multer");

const seedRouter = require("express").Router();

seedRouter.get("/seed-user", upload.single("image"), seedData);

seedRouter.get("/seed-products",upload.single("image"), seedProducts);


module.exports = seedRouter;