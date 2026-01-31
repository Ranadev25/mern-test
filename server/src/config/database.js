const { db_url } = require("../secreat");

const mongoose = require("mongoose");

if (!db_url) {
  console.log("Database url is not defined");
  process.exit(1);
}
const connectDb = async () => {
  try {
    await mongoose.connect(db_url);
    console.log("Database connected successfully");
  } catch (err) {
    console.log("Database connection error:", err);
  }
};

module.exports = {
  connectDb,
};
