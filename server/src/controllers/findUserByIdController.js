const findUser = require("../middleware/findById");
const { successResponse } = require("../middleware/response");
const User = require("../models/userModels");

const findUserById = async (req, res, next) => {
  try {
     const id = req.params.id;
     const options = {password:0}
     const user = await findUser(User, id, options);

     return successResponse(res, {
       statusCode: 200,
       message: "User was successfully found",
       payload: user
     })
   } catch (error) {
     next(error);
   }
}

module.exports = findUserById;