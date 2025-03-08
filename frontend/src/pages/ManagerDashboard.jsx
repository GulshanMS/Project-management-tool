import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";  // ✅ Import Sidebar
import "./ManagerDashboard.css";

const ManagerDashboard = () => {
    const [stats, setStats] = useState({});
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        // Fetch task stats
        axios.get("http://localhost:5000/api/tasks/stats")
            .then(response => setStats(response.data))
            .catch(error => console.error("Error fetching stats:", error));

        // Fetch AI task recommendations
        axios.get("http://localhost:5000/api/tasks/recommendations")
            .then(response => setRecommendations(response.data))
            .catch(error => console.error("Error fetching recommendations:", error));
    }, []);

    return (
        <div className="dashboard-wrapper">
            <Sidebar />  {/* ✅ Sidebar Added */}
            <div className="dashboard-container">
                <h2>📊 Manager Dashboard</h2>

                {/* Task Statistics Section */}
                <div className="stats-container">
                    <div className="stat-box">
                        <h3>✅ Completed</h3>
                        <p>{stats.completed || 0}</p>
                    </div>
                    <div className="stat-box">
                        <h3>⏳ In Progress</h3>
                        <p>{stats.inProgress || 0}</p>
                    </div>
                    <div className="stat-box">
                        <h3>📌 To Do</h3>
                        <p>{stats.toDo || 0}</p>
                    </div>
                </div>

                {/* AI Task Recommendations Section */}
                <div className="recommendations-container">
                    <h3>🤖 AI Task Recommendations</h3>
                    <ul>
                        {recommendations.length > 0 ? (
                            recommendations.map((rec, index) => <li key={index}>{rec}</li>)
                        ) : (
                            <li>No recommendations available</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ManagerDashboard;
