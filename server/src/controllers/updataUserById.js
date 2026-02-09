const createError = require("http-errors");
const { successResponse } = require("../middleware/response");
const User = require("../models/userModels");
const { jwt_secret_key, file_size } = require("../secreat");
const findUser = require("../middleware/findById");
const createJsonWebToken = require("../service/jsonWebToken");

const updataUser = async (req, res, next) => {
  try {
    
    const userId = req.params.id;
    const userOptions = {password:0}
    await findUser(User,userId,userOptions)
    const { name, email, password, phone } = req.body;
    const updateOptions = { new: true, runValidators: true, context: "query" };

    let updates = {};

    const image = req.file?.path;


    //=======one way to update data
    // if (name) {
    //   updates.name = name;
    // }
    // if (email) {
    //   updates.email = email;
    // }
    // if (password) {
    //   updates.password = password;
    // }
    // if (phone) {
    //   updates.phone = phone;
    // }


    for (let key in req.body) {
      if (["name", "email", "password", "phone"].includes(key)) {
        updates[key] = req.body[key]
      }
    }

    if (image) {
      if (image.size > file_size) {
        throw createError(
          400,
          "file size is too large. It must  be less than 2 MB",
        );
      }
      updates.image = image.buffer.toString("base64")
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updates, updateOptions);

    if (!updatedUser) {
      throw createError(404,"Update User with this ID does not exist")
    }

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


