const createError = require("http-errors");
const bcrypt = require("bcryptjs");
const User = require("../models/userModels");
const { successResponse } = require("../middleware/response");
const createJsonWebToken = require("../service/jsonWebToken");
const { jwt_access_key } = require("../secreat");

const handelLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      throw createError(404, "user does not exist. places register first");
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password); // true

    if (!isPasswordMatch) {
      throw createError(401, "Email/Password did not match");
    }

    if (user.isBanned) {
      throw createError(403, "You are Banned. Places contact authority");
    }

    const accessToken = createJsonWebToken({ email }, jwt_access_key, "10m");

    //======= token store cookies======
    // ==== most importents parts of cookie
    res.cookie("Token", accessToken, {
      maxAge: 15 * 60 * 1000, // 15 minutes
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
//===========================
    return successResponse(res, {
      statusCode: 200,
      message: "user login is successfully",
      payload: {},
    });
  } catch (error) {
    next(error);
  }
};

module.exports = handelLogin;
