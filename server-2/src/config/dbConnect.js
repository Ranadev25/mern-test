const { dbUrl } = require("../secret");
const mongoose = require("mongoose")



const connectedDb = async () => {
  try {
    if (!dbUrl) {
      console.log("db url is not found")
      return;
    }

    await mongoose.connect(dbUrl)

    console.log("mongodb is connected")

  } catch (error) {
    console.log("mongodb is not connected")
  }
}

module.exports = connectedDb;