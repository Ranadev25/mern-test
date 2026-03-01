const { successResponse } = require("../middleware/response");
const deleteCategory = require("../services/deletecategory");

const handelDeleteCategory = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const newCategory = await deleteCategory(slug);
    return successResponse(res, {
      statusCode: 200,
      message: "category delete successfully",
      payload:newCategory,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = handelDeleteCategory;