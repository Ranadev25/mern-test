
const { successResponse } = require("../middleware/response");
const User = require("../models/userModels");
const data = require("../seedData");

const seedData = async (req, res, next) => {
  try {
    await User.deleteMany({});

    const user = await User.insertMany(data.users);

    return successResponse(res, {
      statusCode: 201,
      message: "Data Seeded Successfully",
      payload: user,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  seedData,
};
