const createError = require("http-errors");
const sendMailer = require("../third-party/mailer");

const emailSend = async (mailerData) => {
  try {
    return await sendMailer(mailerData);
  } catch (error) {
    throw createError(500, "Failed to send verification email");
  }
};


module.exports = emailSend;