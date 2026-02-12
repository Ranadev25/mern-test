const findUser = require("../middleware/findById");
const { successResponse } = require("../middleware/response");
const User = require("../models/userModels");
const createError = require("http-errors")

const handelBannedUser = async (req, res, next) => {
  try {
    
    const userId = req.params.id;
    await findUser(User, userId);

    const options = {
      new: true,
      unValidators: true,
      context:"query"
    }
    const update = await User.findByIdAndUpdate(userId, { isBanned: true }, options).select("-password");

    if (!update) {
      throw createError(404,"user was not banned successfully")
    }

    return successResponse(res, {
      statusCode: 200,
      message: "user was banned successfully",
      payload:update,
    })

  } catch (error) {
    next(error);
  }
};

module.exports = handelBannedUser;
