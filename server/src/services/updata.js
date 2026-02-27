const User = require("../models/userModels");
const createError = require("http-errors");
const findUser = require("./findById");

const updateUser = async (userId, req) => {
  try {
    const userOptions = { password: 0 };

    await findUser(User, userId, userOptions);
    const updateOptions = { new: true, runValidators: true, context: "query" };

    let updates = {};

    const image = req.file?.path;

    const allowedFields = ["name", "email", "password", "phone"]
    for (const key in req.body) {
      if (allowedFields.includes(key)) {
        updates[key] = req.body[key];
      } else if (key === "email") {
        throw new Error("email can nor be updated")
      }
    }

    if (image) {
      if (image.size > file_size) {
        throw createError(
          400,
          "file size is too large. It must  be less than 2 MB",
        );
      }
      updates.image = image.buffer.toString("base64");
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updates,
      updateOptions,
    ).select("-password");

    if (!updatedUser) {
      throw createError(404, "Update User with this ID does not exist");
    }

    return {
      updatedUser,
      updates,
    };
  } catch (error) {
    if (error instanceof mongoose.Error.CastError) {
      throw createError(400, "Invalid item ID");
    }
    throw error;
  }
};

module.exports = updateUser;
