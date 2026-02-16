const createError = require("http-errors");
const sendMailer = require("../third-party/mailer");
const createJsonWebToken = require("../third-party/jsonWebToken");
const User = require("../models/userModels");
const { jwt_forget_key } = require("../secreat");

const forgetPassword = async (email) => {
  try {
    const user = await User.findOne({email}, { password: 0 });

    if (!user) {
      throw createError(404, "user not found with this email");
    }

    const token = await createJsonWebToken({email}, jwt_forget_key, "30m");

    const mailerData = {
      email: email,
      subject: "forget password email",
      html: `
          <h1>Hello ${user.name}!</h1>
          <p>Click <a href="http://localhost:5173/api/user/${token}" target="_blank">here</a> to verify your email.</p>`,
    };

    try {
      await sendMailer(mailerData);
    } catch (error) {
      next(createError(500, "Failed to send forget password email"));
    }
    return token
  } catch (error) {
    throw error
  }
}

module.exports = forgetPassword;