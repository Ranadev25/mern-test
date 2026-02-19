const jwt = require("jsonwebtoken");
const { jwt_refresh_key } = require("../secreat");

const handelRefreshToken = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    const decodedToken = jwt.verify(refreshToken, jwt_refresh_key);

    
  } catch (error) {
    next(error)
  }
}

module.exports = handelRefreshToken;