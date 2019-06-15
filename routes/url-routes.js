const express = require("express");
const router = express.Router();
const Url = require("../models/url-model")

/* CREATE */

router.porst("/url/create", async (req,res) => {
    try {
        if (req.body.url) {
            const newUrl = new Url({
                original = req.body.url
            })
            await newUrl.save()
            return res.status(200).json(newUrl)
        }
        return res.status(400).json("Bad request")
    } catch (error) {
        return res.status(400).json("Bad request")
    }
})

module.exports = router;
