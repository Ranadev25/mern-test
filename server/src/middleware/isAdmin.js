const createError = require("http-errors")

const isAdmin = async (req, res, next) => {
  try {

    if (!req.user.isAdmin) {
      throw createError(403,"Forbidden. You must be an admin")
    }

    next()
  } catch (error) {
    next(error)
  }
}

module.exports = isAdmin;