const productRouter = require("express").Router();
const runValidation = require("../validation/run");
const isAdmin = require("../middleware/isAdmin");
const isLoggedIn = require("../middleware/isLogIn");

productRouter.get("/products", (req, res) => {
  console.log("hello");
});

productRouter.post("/create-products", (req, res) => {
  
});

module.exports = productRouter;
