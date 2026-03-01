const Category = require("../models/categotyModels");
const slugify = require("slugify");

const updateCategory = async (slug,name) => {
  
  const updatedDate = await Category.findOneAndUpdate({ slug: slug }, { $set: { name: name, slug: slugify(name) } }, { new: true });
  


  if (!updatedDate) {
    throw new Error("No Category found with this slug")
  }

  return updatedDate;
}



module.exports = updateCategory;