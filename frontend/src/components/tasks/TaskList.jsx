import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

const TaskList = ({ userRole }) => {
  const { tasks, updateTask } = useContext(TaskContext);

  return (
    <div>
      <h2>{userRole === "Manager" ? "All Tasks" : "My Tasks"}</h2>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            <strong>{task.title}</strong> - {task.status}
            {userRole === "Manager" && (
              <button onClick={() => updateTask(task._id, "Completed")}>Approve</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
