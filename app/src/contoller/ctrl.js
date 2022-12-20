"use strict";
const project = require("../model/project");
const feedback = require("../model/feedback");
const question = require("../model/question");

const output = {
  index: async (req, res) => {
    res.sendfile(path.join(__dirname, "../react/build/index.html"));
  },
  archiving: async (req, res, next) => {
    const parsingTitles = await project.getProjectAllInfo();
    const titles = parsingTitles.map((temp) => {
      return temp.title;
    });
    res.render("archiving", { title: titles });
  },
};
const process = {
  project: async (req, res, next) => {
    const parsingTitles = await project.getProjectAllInfo();
    const titles = parsingTitles.map((temp) => {
      return temp.title;
    });
    const temp = await project.getProjectInfo(req.params.project);
    console.log(temp);
    res.json({ title: titles, info: temp[0] });
  },
  projectList: async (req, res, next) => {
    const parsingTitles = await project.getProjectAllInfo();
    const titles = parsingTitles.map((temp) => {
      return temp.title;
    });
    console.log(titles);
    res.json(titles);
  },
  feedback: async (req, res, next) => {
    const parsingTitles = await feedback.getFeedbackAllInfo();
    const titles = parsingTitles.map((temp) => {
      return temp;
    });
    console.log(titles);
    res.json(titles);
  },
  question: async (req, res, next) => {
    const parsingTitles = await question.getQuestionAllInfo();
    const titles = parsingTitles.map((temp) => {
      return temp;
    });
    console.log(titles);
    res.json(titles);
  },
  addFeedback: async (req, res) => {
    console.log(req.body.progress);
    if (req.body.progress === "대기중") {
      await question.save(req.body);
    } else {
      await feedback.save(req.body);
    }
    return res.redirect("/");
  },
};

module.exports = { output, process };
