import React, { useState } from "react";
import "./index.css";

const TodoList = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  const [completeIndex, setCompleteIndex] = useState(null);

  const addTask = () => {
    if (task.trim() !== "") {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };

  const handleChangeInput = (e) => {
    setTask(e.target.value);
  };

  const deleteTask = (index) => {
    const updatedTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTaskList);
  };

  const clearAll = () => {
    setTaskList([]);
  };

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>

      <div className="todo-input">
        <input
          type="text"
          onChange={handleChangeInput}
          value={task}
          placeholder="Enter a task..."
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              addTask();
            }
          }}
        />
        <button onClick={() => addTask()} className="add-task-btn">
          Add
        </button>
        <button onClick={() => clearAll()} className="clear-tasks-btn">
          Clear All
        </button>
      </div>

      <div>
        <ol>
          {taskList.map((task, index) => (
            <li key={index}>
              <span className="todo-task">{task}</span>
              <button
                onClick={() => deleteTask(index)}
                className="delete-task-btn"
              >
                Delete Task
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TodoList;
