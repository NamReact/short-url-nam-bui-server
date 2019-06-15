const mongoose = require("mongoose");
const uid2 = require("uid2");

const Url = mongoose.model("Url", {
  original: String,
  key: {
    type: String,
    default: uid2(5)
  },
  visited: Number
});

module.exports = Url;
