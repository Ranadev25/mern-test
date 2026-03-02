const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { default_image } = require("../secreat");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true,"products name is required"],
      trim: true,
      unique: true,
      minLength: [3, "products name must be at least 3 characters long"],
      maxLength: [150, "products name must be at least 150 characters long"]
    },

    slug: {
      type: String,
      required: [true, "products Slug is required"],
      lowercase: true,
      unique:true
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
      trim: true,
      unique: true,
      minLength: [3, "products description must be at least 3 characters long"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      trim: true,
      validate: {
        validator: (v) => v > 0,
        message:(props)=> `${props.value} is not valid price. price must be greater then 0`
      }
    },
    quantity: {
      type: Number,
      required: [true, "Product quantity is required"],
      trim: true,
      validate: {
        validator: (v) => v > 0,
        message:(props)=> `${props.value} is not valid quantity. quantity must be greater then 0`
      }
    },
    sold: {
      type: Number,
      required: [true, "Product sold is required"],
      trim: true,
      default:0,
      validate: {
        validator: (v) => v > 0,
        message:(props)=> `${props.value} is not valid sold quantity. sold must be greater then 0`
      }
    },

    shipping: {
      type: Number,
      default:0,
    },

    image: {
      type: Buffer,
      contentType: String,
      required:[true,"Image is required"]
    },
   
  },
  { timestamps: true },
)
const Products = mongoose.model("Products", productSchema);

module.exports = Products;