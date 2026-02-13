const nodemailer = require("nodemailer");
const { smtp_username, smtp_password } = require("../secreat");


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: smtp_username,
    pass: smtp_password,
  },
});



const sendMailer = async (mailData) => {
  try {
    const info = await transporter.sendMail({
      from: smtp_username,
      to: mailData.email,
      subject: mailData.subject,
      html: mailData.html,
    });
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

module.exports = sendMailer;