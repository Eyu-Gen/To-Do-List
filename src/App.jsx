import "./App.css";
import { useEffect, useState } from "react";
import Task from "./Task";

function App() {

  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleClick = () => {
    if (inputText.trim() === "") return;

    const taskWithStatus = { id: Date.now(), title: inputText, status: "pending" };

    const updatedTasks = [...tasks, taskWithStatus];
    setTasks(updatedTasks);

    localStorage.setItem("task", JSON.stringify(updatedTasks));

    setInputText("");
  };

  useEffect(() => {
    const storedTasks = localStorage.getItem("task");

    if (!storedTasks) return;

    const parsedTasks = JSON.parse(storedTasks);
    setTasks(parsedTasks);

  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);

    setTasks(updatedTasks);
    localStorage.setItem("task", JSON.stringify(updatedTasks));
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
        {tasks.map((task) => (
          <Task key={task.id} task={task} setTasks={setTasks} onDelete={() => deleteTask(task.id)} />
        ))}
      </div>
    </div>
  );
}
// }

export default App;