const express = require("express");
const router = express.Router();
const urlHandler = require("../controllers/url");
router.post("/url", urlHandler);

module.exports = router;
