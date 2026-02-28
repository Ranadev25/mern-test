const createError = require("http-errors");
const { successResponse } = require("../middleware/response");
const userExists = require("../middleware/isExsist");

const handelCreateCategory = async (req, res, next) => {

  try {
    const { name } = req.body;

    console.log(name)

    return successResponse(res, {
      statusCode: 200,
      message:"category was created successfully"
    });
  } catch (error) {
    next(error);
  }
};

module.exports = handelCreateCategory;
