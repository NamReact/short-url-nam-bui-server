const express = require("express");
const router = express.Router();
const uid2 = require("uid2");

const Url = require("../models/url-model");
const check = require("../middlewares/check");

/* CREATE */

router.post("/url/create", check, async (req, res) => {
  try {
    const newUrl = new Url({
      original: req.body.url,
      key: uid2(5)
    });
    await newUrl.save();
    return res.status(200).json(newUrl);
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

/* READ */

/* All */

router.get("/url", async (req, res) => {
  try {
    const urls = await Url.find().select("-__v -_id");
    return res.status(200).json(urls);
  } catch (error) {
    return res.status(400).json(erroe.message);
  }
});

/* One */

router.get("/url/:key", async (req, res) => {
  try {
    const url = await Url.findOne({ key: req.params.key });
    if (url) {
      res.status(200).json(url);
      url.visited++;
      await url.save();
      return;
    }
    return res.status(404).json("Not found");
  } catch (error) {
    return res.status(400).json(erroe.message);
  }
});

module.exports = router;
