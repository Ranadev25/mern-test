const User = require("../models/userModels");
const bcrypt = require("bcryptjs");
const createError = require("http-errors");
const findUser = require("../services/findById");

const updateUserPassword = async (req) => {
  try {
    const userId = req.params.id;
    const { oldPassword, newPassword } = req.body;

    const user = await findUser(User, userId);

    if (!user) {
      throw createError(404, "user does not exist with this id"); 
    }

    const userMatch = await bcrypt.compare(oldPassword, user.password);

    if (!userMatch) {
      throw createError(403, "old password did not match");
    }

    const update = await User.findByIdAndUpdate(
      userId,
      { password: newPassword },
      { new: true },
    );

    return update;
  } catch (error) {
    throw error;
  }
};

module.exports = updateUserPassword;
