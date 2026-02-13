const createHttpError = require("http-errors");
const User = require("../models/userModels");


const handelUserManage = async (userId, action) => {
  try {
    const options = {
      new: true,
      unValidators: true,
      context:"query"
    }
    let update;
    let successMessage;
    if (action === "ban") {
      update = { isBanned: true };
      successMessage = "user was ban successfully";
    } else if (action === "unBan") {
      update = { isBanned: false };
      successMessage = "user was unBan successfully";
    } else {
      throw createHttpError(400, "user action must be ban or unBan");
    }
    
    const userManage = await User.findByIdAndUpdate(userId, update, options).select("-password");
    

    if (!userManage) {
      throw createHttpError(404,"user was not banned successfully")
    }

    return {
      userManage,
      successMessage
    }

  } catch (error) {
    throw createHttpError(error)
  }
}

module.exports = handelUserManage;