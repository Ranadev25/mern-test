const { successResponse } = require("../middleware/response");
const getAllCategory = require("../services/getAllCategory");
const getCategory = require("../services/getsingelcategory.js");

const handelGetSingleCategory = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const Category = await getCategory(slug);

    return successResponse(res, {
      statusCode: 200,
      message: "Single Category fetched successfully",
      payload: Category,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = handelGetSingleCategory;
