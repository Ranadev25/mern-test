require("dotenv").config();
const port = process.env.PORT || 5000;

const db_url = process.env.dbURL || "mongodb+srv://ranakhan:YlElDXmsLlgh7W6y@cluster0.ekabawq.mongodb.net/test-db";

module.exports = {
  port,
  db_url
};
