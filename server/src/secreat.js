require("dotenv").config();
const port = process.env.PORT || 5000;
const default_image =
  process.env.DEFAULT_IMAGE_URL || "src/public/images/users/default.jpg";
const db_url =
  process.env.dbURL ||
  "mongodb+srv://ranakhan:YlElDXmsLlgh7W6y@cluster0.ekabawq.mongodb.net/test-db";
const jwt_secret_key =
  process.env.JWT_SECRET || "24b04177-73d7-4e9b-8a10-2ef8111c549f";
const smtp_username = process.env.SMTP_USERNAME || "";
const smtp_password = process.env.SMTP_PASSWORD || "";
const file_size = Number(process.env.FILE_SIZE) || 2097152;
const file_type = ["image/jpeg","image/jpg","image/png"];

module.exports = {
  port,
  db_url,
  jwt_secret_key,
  smtp_username,
  smtp_password,
  default_image,
  file_size,
  file_type,
};
