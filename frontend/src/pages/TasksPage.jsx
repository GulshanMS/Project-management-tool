import TaskList from "../components/tasks/TaskList";
import TaskForm from "../components/tasks/TaskForm";
import TaskFilter from "../components/tasks/TaskFilter";
import SortTasks from "../components/tasks/SortTasks";
import { useState } from "react";
import "./TasksPage.css";

function TasksPage() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Fix Navbar UI", priority: "High", category: "Development", status: "In Progress", dueDate: "2025-03-10" },
    { id: 2, title: "Create Login Page", priority: "Medium", category: "Design", status: "Pending", dueDate: "2025-03-15" }
  ]);

  const [filterStatus, setFilterStatus] = useState("All");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterPriority, setFilterPriority] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");

  // Function to update task status
  const updateTaskStatus = (id, newStatus) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, status: newStatus } : task)));
  };

  return (
    <div className="tasks-page">
      <h2 className="page-title">Task Management</h2>
      <TaskForm setTasks={setTasks} tasks={tasks} />
      <div className="filters-container">
        <TaskFilter setFilterStatus={setFilterStatus} setFilterCategory={setFilterCategory} setFilterPriority={setFilterPriority} />
        <SortTasks setSortOrder={setSortOrder} />
      </div>
      <TaskList tasks={tasks} updateTaskStatus={updateTaskStatus} filterStatus={filterStatus} filterCategory={filterCategory} filterPriority={filterPriority} sortOrder={sortOrder} />
    </div>
  );
}

export default TasksPage;
