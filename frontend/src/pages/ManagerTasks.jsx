import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import TaskForm from "../components/tasks/TaskForm";
import TaskList from "../components/tasks/TaskList";
import "./ManagerTasks.css";

const ManagerTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [projectId, setProjectId] = useState("");

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/tasks?projectId=${projectId}`);
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    return (
        <div className="task-page">
            <Sidebar />
            <div className="task-content">
                <h2>Manager Tasks</h2>
                <div className="task-actions">
                    <input 
                        type="text" 
                        placeholder="Enter Project ID" 
                        value={projectId} 
                        onChange={(e) => setProjectId(e.target.value)} 
                    />
                    <button onClick={fetchTasks}>Fetch Tasks</button>
                </div>
                <TaskForm fetchTasks={fetchTasks} />
                <TaskList tasks={tasks} fetchTasks={fetchTasks} />
            </div>
        </div>
    );
};

export default ManagerTasks;
