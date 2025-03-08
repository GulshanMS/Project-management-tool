import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import "./Reports.css";

const Reports = () => {
    const [taskStats, setTaskStats] = useState({ completed: 0, inProgress: 0, toDo: 0 });

    useEffect(() => {
        fetchTaskStats();
    }, []);

    const fetchTaskStats = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/tasks/stats");
            const data = await response.json();
            setTaskStats(data);
            renderChart(data);
        } catch (error) {
            console.error("Error fetching task stats:", error);
        }
    };

    const renderChart = (data) => {
        const ctx = document.getElementById("taskChart").getContext("2d");
        new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Completed", "In Progress", "To Do"],
                datasets: [
                    {
                        data: [data.completed, data.inProgress, data.toDo],
                        backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
                    },
                ],
            },
        });
    };

    return (
        <div className="reports-container">
            <h2>Task Performance Overview</h2>
            <canvas id="taskChart"></canvas>
        </div>
    );
};

export default Reports;
