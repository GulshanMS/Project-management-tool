import { useState } from "react";
import AIRecommendations from "../ai/AIRecommendations";
import AIDeadlinePredictor from "../ai/AIDeadlinePredictor";
import "./TaskForm.css";

function TaskForm({ setTasks, tasks }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Development");
  const [deadline, setDeadline] = useState("");

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask({ id: Date.now(), title, priority, category, deadline });
      setTitle("");
    }
  };

  return (
    <div className="task-form">
      <h3>Add New Task</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Task title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Development">Development</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
        </select>
        
        {/* AI Deadline Prediction Component */}
        <AIDeadlinePredictor category={category} priority={priority} setDeadline={setDeadline} />
        
        <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />
        <button type="submit">Add Task</button>
      </form>

      {/* AI Recommendations */}
      <AIRecommendations category={category} addTask={addTask} />
    </div>
  );
}

export default TaskForm;
