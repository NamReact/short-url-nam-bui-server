const mongoose = require("mongoose");

const Url = mongoose.model("Url", {
  original: String,
  key: String,
  visited: {
    type: Number,
    default: 0
  }
});

module.exports = Url;
