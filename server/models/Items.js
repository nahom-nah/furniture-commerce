var mongoose = require("mongoose");

var ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "item name is required"],
  },
  description: {
    type: String,
    required: [true, "item description is required"],
  },
  price: {
    type: Number,
    required: [true, "item Price is required"],
  },
  quantity: {
    type: Number,
    required: [true, "item quantity is required"],
  },
  image: [
    {
      type: String,
    },
  ],
  status: {
    type: String,
    enum: ["New", "Recent", "Old"],
    default: "New",
  },
  //posted by
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

module.exports = mongoose.model("Item", ItemSchema);
