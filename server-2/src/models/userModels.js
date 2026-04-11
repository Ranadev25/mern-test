const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must be at least 3 characters"],
    maxlength: [20, "Name must be at most 20 characters"],
    trim: true
  },
  
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    trim: true,
    match: [/.+\@.+\..+/, "Please enter a valid email"]
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"],
    maxlength: [20, "Password too long"]
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^(?:\+8801|01)[3-9]\d{8}$/.test(v);
      },
      message: props => `${props.value} is not a valid Bangladeshi phone number!`
    }
  },
  image: {
    type: String,
    default: "/assets/new.png"
  },
  isLogin: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
}, { timestamps: true });


const User = mongoose.model("User", userSchema);


module.exports = User;