const jwt = require("jsonwebtoken")
const createError = require("http-errors");
const { jwt_access_key } = require("../secreat");

const isLogOut = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (token) {
      try {
        const decoded = jwt.verify(token, jwt_access_key)
        if (decoded) {
          throw createError(400,"user all ready logged in")
        }
      } catch (error) {
        throw(error)
      }
    }

    next()

  } catch (error) {
    next(error)
  }
}

module.exports = isLogOut;