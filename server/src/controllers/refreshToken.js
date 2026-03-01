const jwt = require("jsonwebtoken");
const { jwt_refresh_key, jwt_access_key } = require("../secreat");
const { successResponse, errorResponse } = require("../middleware/response");
const User = require("../models/userModels");
const createJsonWebToken = require("../third-party/jsonWebToken");
const createHttpError = require("http-errors");

const handelRefreshToken = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return errorResponse(res, {
        statusCode: 400,
        message: "refresh token must be provided. Places logIn first",
        payload: {},
      });
    }
    const decodedToken = await jwt.verify(refreshToken, jwt_refresh_key);

    if (!decodedToken) {
      throw createHttpError(401, "refresh token is not verify successfully");
    }

    // console.log(decodedToken)
    const user = await User.findOne({ _id: decodedToken._id });

    if (!user) {
      throw new Error("refresh Token not match with this decoded id");
    }

    const accessToken = await createJsonWebToken(
      { _id: user._id },
      jwt_access_key,
      "30m",
    );

    res.cookie("accessToken", accessToken, {
      maxAge: 30 * 60 * 1000,
      httpOnly: true,
      secure: true,
      sameSite: true,
    });

    return successResponse(res, {
      statusCode: 200,
      message: "refresh token is generated",
      payload: {},
    });
  } catch (error) {
    next(error);
  }
};

module.exports = handelRefreshToken;
