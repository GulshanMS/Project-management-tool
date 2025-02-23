import { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

const AssignTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description, assignedTo: "employee", status: "Pending" });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Task Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <button type="submit">Assign Task</button>
    </form>
  );
};

export default AssignTask;
