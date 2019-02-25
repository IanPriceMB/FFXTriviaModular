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
const INITAL_STATE = {
  Besaid: [],
  Luca: [],
  Djose: [],
  ThunderPlains: [],
  Gagazet: [],
  Sin:[]
}

// Levels (reducers)
const levelsReducer = (state = INITAL_STATE, action) => {
  if (action.type === 'ANSWER'){
    return {...state[action.payload.level], ...action.payload.answer}
  }

  return levelsReducer;
}

// Combines all level reducers to be access as one state
const levels = combineReducers({
  levelsReducer: levelsReducer
});

// State
const store = createStore(levels);