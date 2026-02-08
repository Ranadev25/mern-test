const jwt = require("jsonwebtoken");
const createError = require("http-errors");
const { jwt_secret_key } = require("../secreat");
const { successResponse } = require("../middleware/response");
const User = require("../models/userModels");

const activateUser = async (req, res, next) => {
  try {
    const { token } = req.body;
    if (!token) {
      return next(createError(400, "Verification token is not found"));
    }

    const decoded = jwt.verify(token, jwt_secret_key);

    if (!decoded) {
      return next(createError(401, "user was not verified"));
    }
    
    const existingUser = await User.exists({ email: decoded.email });
        if (existingUser) {
          return next(createError(409, "User already exists"));
    }
    
    await User.create(decoded);


    return successResponse(res, {
      statusCode: 200,
      message: "user verified successfully"
    });
  } catch (error) {

    if (error.name === "TokenExpiredError") {
      return next(createError(401, "Verification token has expired"));
    } else if (error.name === "JsonWebTokenError") {
      return next(createError(401, "Invalid verification token"));
    } else { 
      return next(createError(500, "Internal Server Error", error));
    }
  }
 }

module.exports = activateUser;