const { successResponse } = require("../middleware/response");
const getAllCategory = require("../services/getAllCategory");

const handelGetAllCategory = async (req, res, next) => {
  try {
    const AllCategory = await getAllCategory();

    return successResponse(res, {
      statusCode: 200,
      message: "Category fetched successfully",
      payload: AllCategory,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = handelGetAllCategory;
