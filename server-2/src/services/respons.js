const successResponse = (res,{statusCode=200,message="success",payload={}}) => {
  return res.json({
    success: true,
    statusCode: statusCode,
    message: message,
    payload:payload
  })
}
const errorResponse = (res,{statusCode=400,message="error",payload={}}) => {
  return res.json({
    success: false,
    statusCode: statusCode,
    message: message,
    payload:payload
  })
}

module.exports = {
  successResponse,
  errorResponse
}