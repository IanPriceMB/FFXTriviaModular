// This file holds the level reducer

ANSWER = require('../actions/types');

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
  if (action.type === ANSWER){
    return {...state[action.payload.level], ...action.payload.answer}
  }

  return state;
}

module.exports = levelsReducer;