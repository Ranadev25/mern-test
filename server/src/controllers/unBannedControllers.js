const findUser = require("../services/findById");
const { successResponse } = require("../middleware/response");
const User = require("../models/userModels");
const createError = require("http-errors");

const handelUnBannedUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    await findUser(User, userId);

    const options = {
      new: true,
      unValidators: true,
      context: "query",
    };
    const update = await User.findByIdAndUpdate(
      userId,
      { isBanned: false },
      options,
    ).select("-password");

    if (!update) {
      throw createError(404, "user was banned successfully");
    }

    return successResponse(res, {
      statusCode: 200,
      message: "user was unBanned successfully",
      payload: update,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = handelUnBannedUser;
