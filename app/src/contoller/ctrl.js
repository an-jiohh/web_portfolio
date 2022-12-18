"use strict";
const project = require("../model/project");

const output = {
  index: async (req, res, next) => {
    const parsingTitles = await project.getProjectAllInfo();
    const titles = parsingTitles.map((temp) => {
      return temp.title;
    });
    res.render("index", { title: titles });
  },
  archiving: async (req, res, next) => {
    const parsingTitles = await project.getProjectAllInfo();
    const titles = parsingTitles.map((temp) => {
      return temp.title;
    });
    res.render("archiving", { title: titles });
  },
  projectList: async (req, res, next) => {
    const parsingTitles = await project.getProjectAllInfo();
    const titles = parsingTitles.map((temp) => {
      return temp.title;
    });
    res.render("projectList", { title: titles });
  },
  projects: async (req, res, next) => {
    const parsingTitles = await project.getProjectAllInfo();
    const titles = parsingTitles.map((temp) => {
      return temp.title;
    });
    const temp = await project.getProjectInfo(req.params.project);
    res.render("project", { title: titles, info: temp[0] });
  },
};
const process = {};

module.exports = { output, process };
