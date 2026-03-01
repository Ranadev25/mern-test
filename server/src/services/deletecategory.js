const Category = require("../models/categotyModels")

const deleteCategory = async (slug) => {
  const newCategory =await Category.findOneAndDelete({ slug: slug });

  if (!newCategory) {
    throw new Error("Category not delete successfully with this slug")
  }

  return newCategory;
}

module.exports = deleteCategory;