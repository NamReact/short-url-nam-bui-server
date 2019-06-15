const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/short-url",
  {
    useNewUrlParser: true
  }
);

/* MODELS */

const Url = require("./models/url-model");

/* ROUTES */

const urlRoutes = require("./routes/url-routes");
app.use(urlRoutes);

app.listen(process.env.PORT || 3001, () => {
  console.log("Server started");
});
