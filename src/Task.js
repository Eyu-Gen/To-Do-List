import './App.css';

function Task({ task, onDelete }) {


  return (
    <div className="taskContainer center">
        <div className="tasks center">
            <input type="checkbox" className='checkBox' value={task}/> 
            <span className='taskLabel'>{task}</span>
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
