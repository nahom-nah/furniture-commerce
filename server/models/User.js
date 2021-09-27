var mongoose = require("mongoose");

var User = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  first_name: String,
  last_name: String,
  salt: String,
  password: String,

  is_deleted: {
    type: Boolean,
    default: false,
  },
  created_on: {
    type: Date,
    default: new Date(),
  },
  created_timestamp: {
    type: Number,
    default: new Date().valueOf(),
  },
  updated_on: Date,
  updated_timestamp: {
    type: Number,
    default: new Date().valueOf(),
  },
});

module.exports = mongoose.model("User", yourModelName);
