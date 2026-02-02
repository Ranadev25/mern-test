const express = require("express");
const app = express();
const userRouter = require("./router/userRouter");
const morgan = require("morgan"); 
const { rateLimit } = require("express-rate-limit");
const { errorResponse } = require("./middleware/response");
const seedRouter = require("./router/seedRouter");

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
  message: "Too many requests from this IP, place try again after 5 minutes",

})

// app.use(limiter);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user",userRouter);
app.use("/api/seed",seedRouter);


app.use((req, res, next) => {
  return errorResponse(res, {
    statusCode: 404,
    message:"Router Not Found",
  })
})


app.use((err, req, res, next) => {
  return errorResponse(res, {
    statusCode:err.statusCode || 500,
    message: err.message || "internal server error",
  })
})


module.exports = app;