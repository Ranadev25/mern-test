const { successResponse } = require("../middleware/response");
const Products = require("../models/productsModels");
const User = require("../models/userModels");
const data = require("../seedData.cjs");

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

const seedProducts = async (req, res, next) => {
  try {
    await Products.deleteMany({});
    const product = await Products.insertMany(data.products);

    return successResponse(res, {
      statusCode: 201,
      message: "seed Products created successfully",
      payload: product,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  seedData,
  seedProducts,
};
