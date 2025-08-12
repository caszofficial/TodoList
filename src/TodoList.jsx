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
    <div className="grid grid-cols-1 mx-auto p-4 bg-[#1e1e24] min-h-screen">
      <div className="grid grid-cols-3 h-fit gap-10 w-full">
        <h1 className="text-4xl text-[#92140c] font-bold h-fit col-span-3">
          Todo List
        </h1>
        <div className="col-span-3 w-full gap-5 flex">
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
            className="col-span-2 border-b-1 px-2 py-1 text-[#fff8f0] border-[#92140c] font-extralight focus:outline-none"
          />
          <button
            onClick={() => addTask()}
            className="w-full md:w-fit rounded-md px-2 md:px-4 md:py-0 py-1 text-md  text-[#fff8f0] hover:text-[#fff8f0b1] active:text-[#fff8f0b1] cursor-pointer transition-all duration-300 ease-in-out font-bold col-span-1"
          >
            Add task
          </button>
        </div>
        <div className="w-full flex justify-end h-fit col-span-3">
          <button
            onClick={() => clearAll()}
            className="text-[#9c3232] rounded-md px-2 py-1 text-xl font-extralight hover:text-[#9c3232b1] active:text-[#ffffff] cursor-pointer transition-all ease-in-out duration-100"
          >
            Clear all tasks
          </button>
        </div>
        <div className="col-span-3">
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {taskList.map((task, index) => (
              <li
                key={index}
                className="bg-[#92140c] rounded-lg p-4 hover:shadow-[0px_5px_10px] shadow-[#fff8f0] hover:scale-105 transition-all duration-100 cursor-pointer"
              >
                <div className="w-full flex justify-end">
                  <button
                    onClick={() => deleteTask(index)}
                    className="w-fit text-2xl font-bold text-[#000000] hover:text-[#fff8f0] cursor-pointer active:text-[#fff8f0b1] transition-all duration-100"
                  >
                    X
                  </button>
                </div>

                <p className="text-2xl font-extralight text-[#fff8f0]">
                  {task}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
