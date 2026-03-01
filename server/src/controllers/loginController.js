const createError = require("http-errors");
const bcrypt = require("bcryptjs");
const { successResponse } = require("../middleware/response");
const User = require("../models/userModels");
const { jwt_access_key, jwt_refresh_key } = require("../secreat");
const createJsonWebToken = require("../third-party/jsonWebToken");
const { setRefreshToken, setAccessToken } = require("../middleware/setToken");

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
      "30m",
    );

    await setAccessToken(res,accessToken)

    const refreshToken = await createJsonWebToken(
      { _id: user._id },
      jwt_refresh_key,
      "5d",
    );

    await setRefreshToken(res,refreshToken)

    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password
    

    return successResponse(res, {
      statusCode: 200,
      message: "user login successfully",
      payload: userWithoutPassword,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = userLogin;
