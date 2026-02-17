const { successResponse } = require("../middleware/response");
const reset_password = require("../services/resetPassword");

const handleResetPassword = async (req, res, next) => {

  try {
    const {token,newPassword }= req.body;
    
    const update = await reset_password(token,newPassword)

    // console.log(update)
    return successResponse(res, {
      statusCode: 200,
      message: "reset password successfully",
      payload: update,
    })
    
  } catch (error) {
    next(error)
  }
}

module.exports = handleResetPassword;