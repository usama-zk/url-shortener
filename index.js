const express = require("express");
const app = express();
const urlRoute = require("./models/url");
const connectDB = require("./connect");
const PORT = 3000;
connectDB();
app.use(express.json());

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const orgURL = await urlRoute.findOneAndUpdate(
    { shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );
  res.redirect(orgURL.redirectUrl);
});
app.post("/url", urlRoute);
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
