
const { successResponse } = require("../middleware/response");
const updateUserPassword = require("../services/passwordUpdate");

const updatePassword = async (req, res, next) => {
  try {
    
    const update = await updateUserPassword(req)

    return successResponse(res, {
      statusCode: 200,
      message: "Password update successfully",
      payload:update
    })


  } catch (error) {
    next(error)
  }
};

module.exports = updatePassword;
