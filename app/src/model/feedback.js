"use strict";

const db = require("../config/db");

const feedbackStorage = {
  getFeedbackAllInfo: () => {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM feedback;";
      db.query(query, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  },
  save: async (feedback) => {
    const query = "INSERT INTO feedback(content, writer) VALUES(?, ?);";
    console.log(feedback.content);
    db.query(query, [feedback.content, feedback.writer]);
  },
};

module.exports = feedbackStorage;
