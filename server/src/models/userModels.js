const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minLength: [3, "name must be at least 3 characters long"],
      maxLength: [20, "name is too large"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
      minLength: [6, "password must be at least 6 characters long"],
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [
        /^(\+8801|01)[3-9]\d{8}$/,
        "Please enter a valid Bangladeshi phone number",
      ],
    },
    image: {
      type: String,
      default: null,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

module.exports = User;
