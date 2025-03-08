import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AssignTask.css";

const AssignTask = () => {
  const [employees, setEmployees] = useState([]);
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    deadline: "",
    status: "Pending",
    assignedTo: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/employees")
      .then(response => setEmployees(response.data))
      .catch(error => console.error("Error fetching employees", error));
  }, []);

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/tasks/create", taskData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      alert("Task assigned successfully!");
      navigate("/manager-dashboard");
    } catch (error) {
      alert("Error assigning task");
    }
  };

  return (
    <div className="assign-task-container">
      <h2>Assign Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Task Title" value={taskData.title} onChange={handleChange} required />

        <textarea name="description" placeholder="Task Description" value={taskData.description} onChange={handleChange} required />

        <select name="priority" value={taskData.priority} onChange={handleChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <input type="date" name="deadline" value={taskData.deadline} onChange={handleChange} required />

        <select name="assignedTo" value={taskData.assignedTo} onChange={handleChange} required>
          <option value="">Select Employee</option>
          {employees.map(emp => (
            <option key={emp._id} value={emp._id}>{emp.name}</option>
          ))}
        </select>

        <button type="submit">Assign Task</button>
      </form>
    </div>
  );
};

export default AssignTask;
