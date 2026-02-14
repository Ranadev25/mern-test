const { body } = require("express-validator");

const validateUserRegistration = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3, max: 31 })
    .withMessage("Name should be at least 3-31 characters long"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email address"),
  body("password")
    .trim()
    .notEmpty()
    // .matches(regax here with all characters)
    .withMessage("password is required")
    .isLength({ min: 6, max: 15 })
    .withMessage("password should be at least 6-15 characters long"),
  body("phone")
    .trim()
    .notEmpty()
    .withMessage("required your bangladesh phone Number"),
  // body("image")
  //   .optional()
  //   .isString()
  //   .withMessage("image is optional string")

  // if i want store database of image file then storing to be buffer data;
  body("image")
    .custom((value, { req }) => {
      if (!req.file || !req.file.buffer) {
        throw new Error("User image is required");
      }
      return true;
    })
    .withMessage("Image is required"),
];

const validateUserLogin = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email address"),
  body("password")
    .trim()
    .notEmpty()
    // .matches(regax here with all characters)
    .withMessage("password is required")
    .isLength({ min: 6, max: 15 })
    .withMessage("password should be at least 6-15 characters long"),
];


const validateUserPasswordUpdate = [
  body("oldPassword")
    .trim()
    .notEmpty()
    // .matches(regax here with all characters)
    .withMessage("Old password is required")
    .isLength({ min: 6, max: 15 })
    .withMessage("password should be at least 6-15 characters long"),
  body("newPassword")
    .trim()
    .notEmpty()
    // .matches(regax here with all characters)
    .withMessage("new password is required")
    .isLength({ min: 6, max: 15 })
    .withMessage("new password should be at least 6-15 characters long"),
  body("confirmPassword")
    .custom((value, { req }) => {
      if (value !== req.body.newPassword) {
        throw new Error("Password is not match")
      }
      return true
    })
    
];

module.exports = { validateUserRegistration, validateUserLogin,validateUserPasswordUpdate };
