import './App.css';

function Task({ task, onDelete, setTasks }) {

  const handleChange = (event) => {
    const updatedTasks = JSON.parse(localStorage.getItem("task")).map(t => {
      if (t.id === task.id) {
        return {
          ...t,
          status: event.target.checked ? "completed" : "pending"
        };
      }
      return t;
    });

    setTasks(updatedTasks);
    localStorage.setItem("task", JSON.stringify(updatedTasks));
  };

  return (
    <div className="taskContainer center">
      <div className="tasks center">

        <input
          type="checkbox"
          className="checkBox"
          checked={task.status === "completed"}
          onChange={handleChange}
        />
        <span className='taskLabel'>{task.title}</span>
      </div>
      <div
        className="deleteTaskBTN center"
        onClick={() => {
          if (window.confirm("Delete this task?")) {
            onDelete();
          }
        }}
      >
        <img src="bin.png" alt="deleteIcon" />
      </div>
    </div>
  );
}

export default Task;
