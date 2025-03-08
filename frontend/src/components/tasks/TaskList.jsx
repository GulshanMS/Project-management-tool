import React, { useState, useEffect } from "react";
import "./TaskList.css"; // Make sure this CSS file is linked properly.

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/tasks");
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    const updateTaskStatus = async (taskId, newStatus) => {
        try {
            await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: newStatus }),
            });
            fetchTasks();
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    return (
        <div className="task-list-container">
            <h2>All Tasks</h2>
            <button onClick={fetchTasks} className="list-all-tasks">List All Tasks</button>
            <div className="task-cards-container">
                {tasks.map((task) => (
                    <div key={task._id} className="task-card">
                        <div className="task-header">
                            <h3>{task.title}</h3>
                            <span className={`status ${task.status.replace(/\s+/g, '')}`}>{task.status}</span>
                        </div>
                        <div className="task-progress">
                            <div className="progress-bar">
                                <div className="progress" style={{ width: task.progress + "%" }}></div>
                            </div>
                            <select 
                                onChange={(e) => updateTaskStatus(task._id, e.target.value)} 
                                value={task.status}
                            >
                                <option value="To Do">To Do</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskList;
