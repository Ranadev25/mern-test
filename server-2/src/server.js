const { port } = require("./secret");
const app = require("./app");
const connectedDb = require("./config/dbConnect");



app.listen(port, async () => {
  console.log(`Server is running at http://localhost:${port}`);
  await connectedDb()
})