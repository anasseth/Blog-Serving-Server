const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const authenticationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    trime: true,
  },
});

// Hash password before save in DB
authenticationSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Compare password
authenticationSchema.statics.comparePassword = async (
  password,
  receivedPassword
) => {
  return await bcrypt.compare(password, receivedPassword);
};

module.exports = mongoose.model("authentications", authenticationSchema);
