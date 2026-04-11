const User = require("../../models/userModels");
const { successResponse } = require("../../services/respons");

const getAllUser = async (req, res,next) => {
  try {
    const users = await User.find();
    if (!users) {
      throw new Error("users is not found is database")
    }
    return successResponse(res, {
      statusCode: 200,
      message: "all users geting successfully",
      payload:users
    })
  } catch (error) {
    next(error.message)
  }
};


module.exports = getAllUser;