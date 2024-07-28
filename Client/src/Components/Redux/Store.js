// src/store.js

import { createStore, combineReducers } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
import petReducer from './PetReducers'; // Adjust the path as needed

const rootReducer = combineReducers({
  pet: petReducer,
  // Add other reducers here
});

const store = createStore(rootReducer);

export default store;
