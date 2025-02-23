import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [navigate]);

    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="dashboard-content">
                <h1>Welcome to Your Dashboard</h1>
            </div>
        </div>
    );
};

export default Dashboard;
