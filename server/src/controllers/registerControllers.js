const createError = require("http-errors");
const { successResponse } = require("../middleware/response");
const User = require("../models/userModels");
const createJsonWebToken = require("../service/jsonWebToken");
const { jwt_secret_key } = require("../secreat");
const sendMailer = require("../service/mailer");


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
    

    // if i want a file with buffer data
    const image = req.file?.path;
    if (!image) {
      return next("user is required")
    }
    const imageBufferData = image.buffer.toString("base64")


    // =====================
    // how to create token for email verification
    const token = await createJsonWebToken({
      email: email,
      name: name,
      phone: phone,
      password: password,
      image:imageBufferData
    }, jwt_secret_key, "10m");


    // =====================
    // how to send mail for email verification
    const mailerData = {
      email: email,
      subject: "Verify your email",
      html: `
      <h1>Hello ${name}!</h1>
      <p>Click <a href="http://localhost:5173/api/user/${token}" target="_blank">here</a> to verify your email.</p>`
    }
    
      try {
        // await sendMailer(mailerData);
      } catch (error) {
        next(createError(500, "Failed to send verification email"));
      }

    return successResponse(res, {
      statusCode: 200,
      message: `please go to your ${email} to verify your account`,
      payload: token
    })
    
  } catch (error) {
    next(error);
  }
}

module.exports = registerUser;