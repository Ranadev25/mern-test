const { mongoose } = require("mongoose")
const createError = require('http-errors');


const findUser = async (Model,id,options = {}) => {
  try {
    const item = await Model.findById(id, options)
    if (!item) {
      throw createError(404, `${Model.modelName} with ID ${id} not found`)
    }
    return item
  } catch (error) {
     if(error instanceof mongoose.Error) {
      throw createError(400, "Invalid item ID")
    }
  }
}

module.exports = findUser;