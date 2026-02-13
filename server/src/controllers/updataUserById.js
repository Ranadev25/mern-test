
const { successResponse } = require("../middleware/response");
const User = require("../models/userModels");
const { jwt_secret_key, file_size } = require("../secreat");
const findUser = require("../services/findById");
const createJsonWebToken = require("../third-party/jsonWebToken");
const updateUser = require("../services/updata");

const updataUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    
    const { name, email, password, phone } = req.body;

    const {updatedUser,updates} = await updateUser(userId,req)

    // =====================
    // how to create token for email verification
    await createJsonWebToken(
      {
        email: email,
        name: name,
        phone: phone,
        password: password,
        image: updates.image,
      },
      jwt_secret_key,
      "10m",
    );

    return successResponse(res, {
      statusCode: 200,
      message: `user wsa update successfully`,
      payload: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updataUser;
