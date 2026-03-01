const { successResponse } = require("../middleware/response");
const { createCategory } = require("../services/serviceCategory");

const handelCreateCategory = async (req, res, next) => {

  try {
    const { name } = req.body;

    const newCategory = await createCategory(name);

    return successResponse(res, {
      statusCode: 201,
      message: "category was created successfully",
      payload:newCategory
    });
  } catch (error) {
    next(error);
  }
};

module.exports = handelCreateCategory;
