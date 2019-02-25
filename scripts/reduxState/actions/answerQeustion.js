//This file is the action for updating the state when a question is answered

ANSWER = require('../actions/types');

function answerQuestion(answer, level) {
  return{
    type: ANSWER,
    payload: {
      answer: answer,
      level: level
    }
  }
}
module.exports = answerQuestion;