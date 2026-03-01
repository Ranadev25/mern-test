const slugify = require("slugify");
const Category = require("../models/categotyModels");

const createCategory = async (name) => {
  const newCategory = await Category.create({
    name: name,
    slug: slugify(name),
  });
  return newCategory
};

module.exports = {createCategory};
