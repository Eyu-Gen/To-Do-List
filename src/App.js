import "./App.css";
import { useState } from "react";
import Task from "./Task.js";

function App() {
  const [task, setTask] = useState("");   
  const [submittedTask, setSubmittedTask] = useState(""); 

  const passTask = () => {
    setSubmittedTask(task);
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
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="addTaskBTN center" onClick={passTask}>
            Add Task
          </button>
        </div>
      </div>

      <hr />
      {submittedTask && <Task submittedTask={submittedTask} />}
    </div>
  );
}


export default App;
