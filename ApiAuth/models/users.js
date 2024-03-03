const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: {
      city: { type: String, required: true },
      country: { type: String, required: true },
    },
  },
  
});
module.exports = mongoose.model("User", userSchema);
