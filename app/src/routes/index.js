"use strict";

const db = require("../config/db");

const express = require("express");
const router = express.Router();

const ctrl = require("../contoller/ctrl");

router.post("/communication", ctrl.process.addFeedback);

router.get("/", ctrl.output.index);
//router.get("/archiving", ctrl.output.archiving);
router.get("/rest/projects", ctrl.process.projectList);
router.get("/rest/feedback", ctrl.process.feedback);
router.get("/rest/question", ctrl.process.question);
router.get("/rest/:project", ctrl.process.project);

module.exports = router;
