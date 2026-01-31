const successResponse = (res, { statusCode = 200, message = "Success", payload = {} }) => {
  res.status(statusCode).json({
    success: true,
    message,
    payload
  })
}
const errorResponse = (res, { statusCode = 500, message = "Error", payload = {} }) => {
  res.status(statusCode).json({
    success: false,
    message,
    payload
  })
}

module.exports = {
  successResponse,
  errorResponse,
}