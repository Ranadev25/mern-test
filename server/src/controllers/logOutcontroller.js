const { successResponse } = require("../middleware/response");

const handelLogout = async (req, res, next) => {
  try {
    res.clearCookie("token");
    return successResponse(res, {
      statusCode: 200,
      message: "user loggedOut successfully ",
      payload: {},
    });
  } catch (error) {
    next(error);
  }
};

module.exports = handelLogout;
