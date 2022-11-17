"use strict";

const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/archiving", function (req, res, next) {
  res.render("archiving");
});

module.exports = router;
