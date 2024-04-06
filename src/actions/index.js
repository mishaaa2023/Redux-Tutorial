// actions represent something that happened in the application. For example, when a user adds a new task, it triggers an "add task" action. Similarly, when a user deletes a task, it triggers a "delete task" action.

export const addTodo = (text) => {
    return {
      type: "ADD_TASK",
      payload: {
        id: new Date().getTime(),
        text: text,
      },
    };
  };
  
  export const deleteTodo = (id) => {
    return {
      type: "DELETE_TASK",
      payload: id,
    };
  };
  