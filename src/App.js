import "./App.css";
import { useState } from "react";
import Task from "./Task.js";

function App() {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleClick = () => {
    if (inputText.trim() === "") return;
    setTasks([...tasks, inputText]);
    setInputText("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="mainContainer">
      <div className="headerSection center">
        <h1>My To-Do List</h1>
      </div>

      <div className="inputSection center">
        <div className="inputs center">
          <input
            className="addTaskInput"
            type="text"
            placeholder="Add a new task..."
            value={inputText}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button className="addTaskBTN center" onClick={handleClick}>
            Add Task
          </button>
        </div>
      </div>
      <hr />
      <div className="taskMainContainer center">
        {tasks.map((task, index) => (
          <Task key={index} task={task} onDelete={() => deleteTask(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;
