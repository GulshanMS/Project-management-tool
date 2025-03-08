import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ fetchTasks }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Medium");
    const [deadline, setDeadline] = useState("");
    const [projectId, setProjectId] = useState(generateProjectId());

    function generateProjectId() {
        return Math.random().toString(36).substring(2, 10).toUpperCase(); 
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/tasks", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, description, priority, deadline, projectId }),
            });

            if (!response.ok) throw new Error("Task creation failed");

            fetchTasks();
            setTitle("");
            setDescription("");
            setPriority("Medium");
            setDeadline("");
            setProjectId(generateProjectId()); // Generate a new ID for next task
        } catch (error) {
            console.error("Error creating task:", error);
        }
    };

    return (
        <div className="task-form">
            <h3>Create Task</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <textarea placeholder="Task Description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>

                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="High">High Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="Low">Low Priority</option>
                </select>

                <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />

                <input type="text" value={projectId} readOnly />

                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default TaskForm;
