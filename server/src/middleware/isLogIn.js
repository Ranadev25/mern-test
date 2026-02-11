const createError = require("http-errors");
const jwt = require("jsonwebtoken");
const { jwt_access_key } = require("../secreat");
const User = require("../models/userModels");

const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      throw createError(404, "Access token is not found");
    }

    const decoded = jwt.verify(token, jwt_access_key);

    if (!decoded) {
      throw createError(404, "Invalid Access token. Place login first");
    }

    const user = await User.findOne({_id:decoded._id})

    req.user = user;
    next();

  } catch (error) {
    next(error);
  }
};

module.exports = isLoggedIn;