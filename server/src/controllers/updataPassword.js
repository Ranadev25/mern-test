const User = require("../models/userModels");
const bcrypt = require("bcryptjs");
const createError = require("http-errors");
const findUser = require("../services/findById");
const { successResponse } = require("../middleware/response");

const updatePassword = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const { oldPassword, newPassword} = req.body;

    const user = await findUser(User, userId);

    if (!user) {
      throw createError(404, "user does not exist with this id");
    }

    const userMatch = await bcrypt.compare(oldPassword, user.password);

    if (!userMatch) {
      throw createError(403, "old password did not match");
    }

    const update = await User.findByIdAndUpdate(userId, { password: newPassword }, { new: true });

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
