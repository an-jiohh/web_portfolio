"use strict";

const db = require("../config/db");

const express = require("express");
const router = express.Router();

const ctrl = require("../contoller/ctrl");

router.get("/", ctrl.output.index);
router.get("/archiving", ctrl.output.archiving);
router.get("/projectList", ctrl.output.projectList);
router.get("/:project", ctrl.output.projects);

module.exports = router;
