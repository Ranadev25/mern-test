const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { default_image } = require("../secreat");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true,"category name is required"],
      trim: true,
      unique: true,
      minLength: [3, "name must be at least 3 characters long"]
    },

    slug: {
      type: String,
      required: [true, "Category Slug is required"],
      lowercase: true,
      unique:true
    }
   
  },
  { timestamps: true },
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
