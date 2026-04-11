const port = process.env.PORT || 5179;
const dbUrl = process.env.DB || "mongodb+srv://ranakhan:YlElDXmsLlgh7W6y@cluster0.ekabawq.mongodb.net/server2"

module.exports = {
  port,
  dbUrl,
}