import { createStore, combineReducers } from "redux";

// Chose a level or Choose an answer (action creators)
chooseAnswer = (answer, level) => {
  return{
    type: 'ANSWER',
    payload: {
      answer: answer,
      level: level
    }
  }
}

// Levels (reducers)
const besaid = (besaidAnswers, action) => {
  if (action.payload.type === 'Besaid'){
    return [...besaidAnswers, action.payload]
  }

  return besaidAnswers;
}

// Combines all level reducers to be access as one state
const levels = combineReducers({
  Besaid: besaid,
});

const store = createStory(levels);