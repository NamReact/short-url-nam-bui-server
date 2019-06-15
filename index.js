const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/to-do-list-2",
  {
    useNewUrlParser: true
  }
);

app.listen(process.env.PORT || 3001, () => {
  console.log("Server started");
});
