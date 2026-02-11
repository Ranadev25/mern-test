const createError = require("http-errors");
const bcrypt = require("bcryptjs");
const { successResponse } = require("../middleware/response");
const User = require("../models/userModels");
const createJsonWebToken = require("../service/jsonWebToken");
const { jwt_access_key } = require("../secreat");

const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      throw createError(404, "user does not exist with this id");
    }

    const userMatch = await bcrypt.compare(password, user.password);

    if (!userMatch) {
      throw createError(403, "Email/Password does not match");
    }

    if (user.isBanned) {
      throw createError(403, "you are banned. places contract authority");
    }
    const accessToken = await createJsonWebToken(
      { _id: user._id },
      jwt_access_key,
      "10m",
    );

    res.cookie("token", accessToken, {
      maxAge: 30 * 60 * 1000,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    return successResponse(res, {
      statusCode: 200,
      message: "user login successfully",
      payload: {},
    });
  } catch (error) {
    next(error);
  }
};

module.exports = userLogin;
