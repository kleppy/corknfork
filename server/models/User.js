// Imports necessary mongoose, bcrpyt, and custom assets.
const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const Cellar = require("./Cellar");

// Defines the User schema with necessary fields and validation.
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  cellar: [Cellar.schema],
});

// Pre-save middleware to hash the password before saving.
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    try {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    } catch (err) {
      return next(err);
    }
  }
  next();
});

// Compares incoming password with the hashed password.
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Initializes and exports the user model.
const User = model("User", userSchema);
module.exports = User;
