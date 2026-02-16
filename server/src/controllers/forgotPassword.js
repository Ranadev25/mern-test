const { successResponse } = require("../middleware/response");
const forgetPassword = require("../services/forgetPassword");

const handelForgetPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const token = await forgetPassword(email);
    return successResponse(res, {
      statusCode: 200,
      message: `Please go to your ${email} for reset password`,
      payload: token,
    });
  } catch (error) {
    next(error);
  }
};


module.exports = handelForgetPassword;
