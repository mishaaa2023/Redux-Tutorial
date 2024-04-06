import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

const Task = () => {
    const dispatch = useDispatch();
    const inputRef = useRef(null);
  
    function addNewTask() {
      const task = inputRef.current.value.trim();
      if (task !== "") {
        dispatch(addTodo(task));
        inputRef.current.value = "";
      }
    }
  
    return (
      <div className="task-component">
        <div className="add-task">
          <input
            type="text"
            placeholder="Add task here..."
            ref={inputRef}
            className="taskInput"
          />
          <button onClick={addNewTask}>Add task</button>
        </div>
      </div>
    );
  };
  
  export default Task;
  

  //In the code above, we created a component consisting of an input field and a button. When a user clicks on the "Add task" button, the addNewTask function is executed. This function uses the useRef hook to obtain the input field's value, removes any leading or trailing whitespaces, and then dispatches the addTodo action with the new task as the payload.