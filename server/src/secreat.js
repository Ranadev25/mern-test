require("dotenv").config();
const port = process.env.PORT || 5000;

const db_url = process.env.dbURL || "mongodb+srv://ranakhan:YlElDXmsLlgh7W6y@cluster0.ekabawq.mongodb.net/test-db";
const jwt_secret_key = process.env.JWT_SECRET || "24b04177-73d7-4e9b-8a10-2ef8111c549f";
const smtp_username = process.env.SMTP_USERNAME || "";
const smtp_password = process.env.SMTP_PASSWORD || "";

module.exports = {
  port,
  db_url,
  jwt_secret_key,
  smtp_username,
  smtp_password
};
