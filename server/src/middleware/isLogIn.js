const createError = require("http-errors");
const jwt = require("jsonwebtoken");
const { jwt_access_key } = require("../secreat");

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

    // req.body.userId = decoded._id;
    next();

  } catch (error) {
    next(error);
  }
};

module.exports = isLoggedIn;