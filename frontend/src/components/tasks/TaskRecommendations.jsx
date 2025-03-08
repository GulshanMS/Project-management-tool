import React, { useState, useEffect } from "react";
import "./TaskRecommendations.css";

const TaskRecommendations = () => {
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        fetchRecommendations();
    }, []);

    const fetchRecommendations = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/tasks/recommendations");
            const data = await response.json();
            setRecommendations(data);
        } catch (error) {
            console.error("Error fetching recommendations:", error);
        }
    };

    return (
        <div className="recommendations-container">
            <h2>AI Task Recommendations</h2>
            <ul>
                {recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskRecommendations;
