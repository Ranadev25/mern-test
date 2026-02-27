const app = require("./app");
const { connectDb } = require("./config/database");
const logger = require("./controllers/loggerControllers");
const { port } = require("./secreat");

app.listen(port,  async () => {
  logger.log("info",`server is running on port at http://localhost:${port}`);
  await connectDb();
});
