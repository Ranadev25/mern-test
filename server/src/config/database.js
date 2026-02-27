const logger = require("../controllers/loggerControllers");
const { db_url } = require("../secreat");

const mongoose = require("mongoose");

if (!db_url) {
  logger.log("error","Database url is not defined");
  process.exit(1);
}
const connectDb = async () => {
  try {
    await mongoose.connect(db_url);
    logger.log("info","Database connected successfully");
  } catch (err) {
    logger.log("error","Database connection error:", err);
  }
}

module.exports = {
  connectDb,
};
