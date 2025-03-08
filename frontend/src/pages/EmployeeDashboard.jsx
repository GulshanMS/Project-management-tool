import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const ManagerDashboard = () => {
    return (
        <div className="dashboard-container">
            <Navbar />
            <Sidebar />
            <div className="content">
                <h2>Welcome to Manager Dashboard</h2>
            </div>
        </div>
    );
};

export default ManagerDashboard;
