"use strict";

//모듈
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const logger = require("morgan");
const dotenv = require("dotenv");
dotenv.config(); //메소드는 모듈이 .env에서 접근할 수 있도록 해줌
const cors = require("cors");

const app = express();

//라우팅 위치 세팅
const indexRouter = require("./src/routes/index");

// 앱세팅
app.set("views", path.join(__dirname, "/src/views"));
app.set("view engine", "ejs");

// 미들웨어 세팅
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "/src/public")));
app.use(express.static(path.join(__dirname, "../react/build")));
app.use("/", indexRouter);
// 404 처리 미들웨어
app.use(function (req, res, next) {
  next(createError(404));
});
// 에러 핸들러
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
