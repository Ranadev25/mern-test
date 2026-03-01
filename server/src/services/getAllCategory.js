
const Category = require("../models/categotyModels");

const getAllCategory = async () => {
  const newCategory = await Category.find().select("name slug").lean();
  return newCategory;
};

module.exports = getAllCategory;
