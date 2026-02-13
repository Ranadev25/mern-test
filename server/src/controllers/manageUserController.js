const { successResponse } = require("../middleware/response");
const User = require("../models/userModels");
const handelUserManage = require("../services/handelBan");

const handelManageUser = async (req, res, next) => {
  try {
    const action = req.body.action;
    const userId = req.params.id;

    const newUpdata = await handelUserManage(userId, action);

    return successResponse(res, {
      statusCode: 200,
      message: newUpdata.successMessage,
      payload: newUpdata,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = handelManageUser;
