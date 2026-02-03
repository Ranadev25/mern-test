const createError = require("http-errors");
const { successResponse } = require("../middleware/response");
const User = require("../models/userModels");
const createJsonWebToken = require("../service/jsonWebToken");
const { jwt_secret_key } = require("../secreat");


const registerUser = async (req, res, next) => { 
  try {
    const { name, email, password, phone } = req.body;

    const existingUser = await User.exists({ email: email });
    if (existingUser) {
      return next(createError(409, "User already exists"));
    }

    

    // we can used to register user in this way also
    // const newUser = new User({
    //   name,
    //   email,
    //   password,
    //   phone
    // })
    // await newUser.save();

    const token = await createJsonWebToken({
      email: email,
      name: name,
      phone: phone,
      password: password
    }, jwt_secret_key, "10s");

    
    return successResponse(res, {
      statusCode: 200,
      message: "User registered successfully",
      payload: token
    })
    
  } catch (error) {
    next(error);
  }
  
}

module.exports = registerUser;