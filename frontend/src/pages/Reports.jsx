import React, { useEffect, useState } from "react";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import Sidebar from "../components/Sidebar";
import "./Reports.css";
import { 
    Chart as ChartJS, ArcElement, Tooltip, Legend, 
    CategoryScale, LinearScale, BarElement 
} from "chart.js";

// ✅ Register Chart.js components to prevent errors
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Reports = () => {
    const [taskStats, setTaskStats] = useState({});
    const [priorityStats, setPriorityStats] = useState({});

    useEffect(() => {
        fetchTaskStats();  // ✅ Fetch only on page load or refresh
    }, []);

    const fetchTaskStats = async () => {
        console.log("Fetching task stats...");
        try {
            const response = await fetch("http://localhost:5000/api/tasks/stats");
            const data = await response.json();
            setTaskStats(data);
            setPriorityStats(data.priorityStats || {}); // New: Fetch priority distribution
        } catch (error) {
            console.error("Error fetching task stats:", error);
        }
    };

    return (
        <div className="reports-page">
            <Sidebar />
            <div className="reports-content">
                <h2>📊 Reports & Analytics</h2>

                {/* ✅ Task Status Distribution (Doughnut Chart) */}
                <div className="chart-container">
                    <h3>Task Status Overview</h3>
                    <Doughnut
                        data={{
                            labels: ["Completed", "In Progress", "To Do"],
                            datasets: [
                                {
                                    data: [taskStats.completed || 0, taskStats.inProgress || 0, taskStats.toDo || 0],
                                    backgroundColor: ["#4CAF50", "#FFC107", "#F44336"]
                                }
                            ]
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false
                        }}
                    />
                </div>

                {/* ✅ Task Progress (Bar Chart) */}
                <div className="chart-container">
                    <h3>Task Progress Overview</h3>
                    <Bar
                        data={{
                            labels: ["Completed", "In Progress", "To Do"],
                            datasets: [
                                {
                                    label: "Tasks",
                                    data: [taskStats.completed || 0, taskStats.inProgress || 0, taskStats.toDo || 0],
                                    backgroundColor: ["#4CAF50", "#FFC107", "#F44336"]
                                }
                            ]
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            }
                        }}
                    />
                </div>

                {/* ✅ Task Priority Distribution (Pie Chart) */}
                <div className="chart-container">
                    <h3>Task Priority Distribution</h3>
                    <Pie
                        data={{
                            labels: ["High Priority", "Medium Priority", "Low Priority"],
                            datasets: [
                                {
                                    data: [
                                        priorityStats.high || 0, 
                                        priorityStats.medium || 0, 
                                        priorityStats.low || 0
                                    ],
                                    backgroundColor: ["#FF5733", "#FFC300", "#36A2EB"]
                                }
                            ]
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Reports;
