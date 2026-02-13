const User = require("../models/userModels");

const handelPagination = async (search, page, limit) => {
  try {
    const searchValue = new RegExp(".*" + search + ".*", "i");

    const filter = {
      // isAdmin: { $ne: true },
      $or: [
        { name: { $regex: searchValue } },
        { email: { $regex: searchValue } },
        { phone: { $regex: searchValue } },
      ],
    };

    const user = await User.find(filter, { password: 0 })
      .skip((page - 1) * limit)
      .limit(limit);

    const count = await User.find(filter, { password: 0 }).countDocuments();

    return {
      user,
      pagination: {
        totalPages: Math.ceil(count / limit),
        currentPage: page,
        previousPage: page - 1 > 0 ? page - 1 : null,
        nextPage: page + 1 <= Math.ceil(count / limit) ? page + 1 : null,
        totalUsers: count,
      },
    };

    // return successResponse(res, {
    //   statusCode: 200,
    //   message: "User fetched successfully",
    //   payload: {
    //     user,
    //     pagination: {
    //       totalPages: Math.ceil(count / limit),
    //       currentPage: page,
    //       previousPage: page - 1 > 0 ? page - 1 : null,
    //       nextPage: page + 1 <= Math.ceil(count / limit) ? page + 1 : null,
    //       totalUsers: count,
    //     },
    //   },
    // });
  } catch (error) {
    throw error;
  }
};

module.exports = handelPagination;
