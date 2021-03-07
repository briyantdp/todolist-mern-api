const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todolistSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("todolistSchema", todolistSchema);
