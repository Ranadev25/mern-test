const { successResponse } = require("../../services/respons");
const User = require("../../models/userModels");
const data = require("../../seedUserData");

const insertSeedData = async (req,res,next) => {
  try {

    await User.deleteMany({})
    const newData = await User.insertMany(data);

    return successResponse(res, {
      statusCode: 202,
      message: "seed data uplode successfully",
      payload: newData
    })
    
  } catch (error) {
    next(error.message)
  }
}

module.exports = insertSeedData;