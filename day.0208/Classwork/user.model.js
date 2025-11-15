const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullname: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  role: {
    type: String,
    default: "user",
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

// ========================
//   signToken მეთოდი
// ========================
userSchema.methods.signToken = function () {
  return jwt.sign(
    { id: this._id }, // payload
    process.env.JWT_SECRET, // საიდუმლო სიტყვა
    { expiresIn: process.env.JWT_EXPIRES_IN } // exp
  );
};

module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullname: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  role: {
    type: String,
    default: "user",
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});


userSchema.methods.signToken = function () {
  return jwt.sign(
    { id: this._id }, // payload
    process.env.JWT_SECRET, // საიდუმლო სიტყვა
    { expiresIn: process.env.JWT_EXPIRES_IN } // exp
  );
};

module.exports = mongoose.model("User", userSchema);
