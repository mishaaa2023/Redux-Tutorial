const initialState = {
  tasks: []
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    default:
      return state;
  }
};

export default rootReducer;

  // Inside the above taskReducer.js file, we define a reducer function that takes two arguments: state and action. The state argument represents the current state of the application, while the action argument represents the action being dispatched to update the state.

  // The switch statement inside the reducer handles different cases based on the "type" of the action. For example, if the action type is ADD_TASK, the reducer returns a new state object with a new task added to the tasks array. And if the action type is DELETE_TASK, the reducer returns a new state object with the current tasks filtered to remove the task with the specified id.