const Url = require("../models/url-model");

check = async (req, res, next) => {
  try {
    if (req.body.url) {
      const url = await Url.findOne({ original: req.body.url });
      if (url) {
        return res.status(409).json("URL already shortened");
      }
      return next();
    }
    return res.status(400).json("Bad request");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = check;
