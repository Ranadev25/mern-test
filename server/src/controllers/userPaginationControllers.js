const { successResponse } = require("../middleware/response");
const User = require("../models/userModels");
const handelPagination = require("../services/pagination");

const userGet = async (req, res,next) => {
  try {
    const search = req.query.search || "";
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 3;

    // const searchValue = new RegExp(".*" + search + ".*", "i")

    // const filter = {
    //   isAdmin: { $ne: true },
    //   $or: [
    //     { name: { $regex: searchValue } },
    //     { email: { $regex: searchValue } },
    //     { phone: { $regex: searchValue } },
    //   ]
    // }


    // const user = await User.find(filter,{password:0}).skip((page - 1) * limit).limit(limit);

    // const count = await User.find(filter, { password: 0 }).countDocuments();

    const {user,pagination} = await handelPagination(search,page,limit)
    return successResponse(res, {
      statusCode: 200,
      message: "User fetched successfully",
      payload: {
        user,
        pagination,
      }
    });
  } catch (error) {
    next(error);
  }
  
};

module.exports = {
  userGet,
};
