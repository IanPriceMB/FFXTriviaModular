// Combines all reducers to be access as one state
combineReducers = require('redux');
levelsReducer = require('./levelsReducer');

const rootReducer = combineReducers({
  levelsReducer: levelsReducer
});

rootReducer({
  levelsReducer: levelsReducer
});

module.exports = rootReducer; 