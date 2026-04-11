require('dotenv').config();
const express = require("express");
const userRouter = require("./router/userRouter")
const app = express();

const { errorResponse } = require('./services/respons');

app.use("/users/api", userRouter)



app.use((req, res, next) => {
  return errorResponse(res, {
    statusCode: 404,
    message: "route is not found",
  })
})

app.use((err,req, res, next) => {
  return errorResponse(res, {
    statusCode: 500,
    message: err.message,
  })
})

module.exports = app;