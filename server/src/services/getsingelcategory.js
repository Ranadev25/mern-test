
const Category = require("../models/categotyModels");

const getCategory = async (slug) => {
  const newCategory = await Category.findOne({slug}).select("name slug").lean();
  return newCategory;
};

module.exports = getCategory;
