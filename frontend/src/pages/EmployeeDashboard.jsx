import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const EmployeeDashboard = () => {
    return (
        <div className="dashboard-container">
            <Navbar />
            <Sidebar />
            <div className="content">
                <h2>Welcome to Employee Dashboard</h2>
            </div>
        </div>
    );
};

export default EmployeeDashboard;
