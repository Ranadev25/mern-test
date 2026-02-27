const jwt = require("jsonwebtoken");
const User = require("../models/userModels");
const createHttpError = require("http-errors");
const { successResponse, errorResponse } = require("../middleware/response");
const { jwt_access_key } = require("../secreat");

const handelProtectedRoute = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.accessToken;
    if (!refreshToken) {
      return errorResponse(res, {
        statusCode: 400,
        message: "refresh token must be provided. Places logIn first",
        payload: {},
      });
    }
    const decodedToken = await jwt.verify(refreshToken, jwt_access_key);

    if (!decodedToken) {
      throw createHttpError(401, "Invalid access Token. Places login first");
    }

    const user = await User.findOne({ _id: decodedToken._id });

    if (!user) {
      throw new Error("refresh Token not match with this decoded id");
    }

    return successResponse(res, {
      statusCode: 200,
      message: "Protected resources access successfully",
      payload: user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = handelProtectedRoute;
