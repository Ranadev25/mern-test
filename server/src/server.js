const app = require("./app");
const { connectDb } = require("./config/database");
const { port } = require("./secreat");

app.listen(port,  async () => {
  console.log(`server is running on port at http://localhost:${port}`);
  await connectDb();
});
