"use strict";

const db = require("../config/db");

const projectStorage = {
  getProjectAllInfo: () => {
    return new Promise((resolve, reject) => {
      const query = "SELECT title FROM project;";
      db.query(query, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  },
  getProjectInfo: (projectName) => {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM project WHERE title = ?";
      db.query(query, projectName, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  },
};

module.exports = projectStorage;
