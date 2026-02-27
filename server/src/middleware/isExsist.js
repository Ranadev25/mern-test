const User = require("../models/userModels");

const userExists = async (email ) => {
  try {
    return User.exists({ email: email });
  } catch (error) {
    throw new Error("error")
  }
}

module.exports = userExists;