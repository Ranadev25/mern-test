const User = require("../models/userModels");
const jwt = require("jsonwebtoken");
const { jwt_forget_key } = require("../secreat");
const createHttpError = require("http-errors");


const reset_password = async (token,newPassword) => {
  try {
    const decoded = jwt.verify(token, jwt_forget_key);
    if (!decoded) {
      throw createHttpError(400, "Invalid od expired token");
    }

    const filter = { email: decoded.email };

    const update = await User.findOneAndUpdate(
      filter,
      { password: newPassword },
      { new: true },
    ).select("-password");

    if (!update) {
      throw createHttpError(400, "password reset filed");
    }

    return update;
  } catch (error) {
    throw error;
  }
};

module.exports = reset_password;
