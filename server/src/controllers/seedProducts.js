const { successResponse } = require("../middleware/response");
const Products = require("../models/productsModels");
const data = require("../seedData.cjs");

const seedProducts = async (req, res, next) => {
  try {
    await Products.deleteMany({});
    const product = await Products.insertMany(data.products);

    return successResponse(res, {
      statusCode: 201,
      message: "seed Products created successfully",
      payload:product,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = seedProducts;