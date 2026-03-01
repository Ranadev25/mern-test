const { successResponse } = require("../middleware/response");
const updateCategory = require("../services/updateCatagory");


const handelUpdateCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    const { slug } = req.params;

    const newCategory = await updateCategory(slug,name)

    return successResponse(res, {
      statusCode: 201,
      message: "category update successfully",
      payload: newCategory,
    })
    
  } catch (error) {
    next(error)
  }
}

module.exports = handelUpdateCategory;