// This file holds the app level state

createStore = require('redux');
rootReducer = require('./reducers/root');

// State
const store = createStore(rootReducer);

module.exports = store;