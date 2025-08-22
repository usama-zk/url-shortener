const { nanoid } = require("nanoid");
const URL = require("../models/url");

async function urlHandler(req, res) {
  const body = req.body;
  if (!body) {
    return res.status(400).json({ error: "No data provided" });
  } else {
    const shorID = nanoid(10);
    await URL.create({
      shortId: shorID,
      redirectUrl: body.redirectUrl,
      visitHistory: [],
    });
    return res.json({ shortId: shorID });
  }
}

module.exports = urlHandler;
