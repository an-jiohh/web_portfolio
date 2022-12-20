"use strict";

const db = require("../config/db");

const questionStorage = {
  getQuestionAllInfo: () => {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM question;";
      db.query(query, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  },
  save: async (question) => {
    const query =
      "INSERT INTO question(content, writer,progress) VALUES(?, ?,?);";
    console.log(question.content);
    db.query(query, [question.content, question.writer, question.progress]);
  },
};

module.exports = questionStorage;
