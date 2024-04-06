import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import taskReducer from "./reducers/taskReducer";

const store = createStore(
  taskReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

// The rootReducer – which combines all the application's reducers into a single reducer – is passed as an argument to createStore.

// To connect the Redux store to the ToDo application, we need to use the Provider component from the react-redux library.

// First, we import the Provider function and the Redux store we created into our main.jsx. Then, we wrap our App component with the Provider function and pass the store as a prop. This makes the Redux store available to all the components inside the App.