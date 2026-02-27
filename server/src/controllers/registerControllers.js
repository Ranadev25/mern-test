const createError = require("http-errors");
const { successResponse } = require("../middleware/response");
const User = require("../models/userModels");
const createJsonWebToken = require("../third-party/jsonWebToken");
const { jwt_secret_key } = require("../secreat");
const sendMailer = require("../third-party/mailer");
const userExists = require("../middleware/isExsist");
const emailSend = require("../middleware/sendEmail");

const registerUser = async (req, res, next) => {

  try {
    const { name, email, password, phone } = req.body;
    console.log(name);
    
    const existingUser = await userExists(email);

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
    const image = req.file;
    if (!image) {
      return next("user is required");
    }
    const imageBufferData = image.buffer.toString("base64");

    // =====================
    // // how to create token for email verification
    const token = await createJsonWebToken(
      {
        email: email,
        name: name,
        phone: phone,
        password: password,
        image: imageBufferData,
      },
      jwt_secret_key,
      "10m",
    );

    // =====================
    // how to send mail for email verification
    const mailerData = {
      email: email,
      subject: "Verify your email",
      html: `
      <h1>Hello ${name}!</h1>
      <p>Click <a href="http://localhost:5173/api/user/${token}" target="_blank">here</a> to verify your email.</p>`,
    };


    await emailSend(mailerData)

    return successResponse(res, {
      statusCode: 200,
      message: `please go to your to verify ${name} your account`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = registerUser;
