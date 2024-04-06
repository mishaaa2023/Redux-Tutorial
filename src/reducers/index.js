// The index.js file represents the root reducer, which combines all the individual reducers in the application.
// The taskReducer.js file is one of the individual reducers that will be combined in the root reducer.

import taskReducer from './taskReducer'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  tasks: taskReducer,
});

export default rootReducer;
