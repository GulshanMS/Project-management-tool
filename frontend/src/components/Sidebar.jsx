import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul>
                <li><Link to="/manager-dashboard">🏠 Dashboard</Link></li>
                <li><Link to="/manager-tasks">📌 Tasks</Link></li>
                <li><Link to="/reports">📊 Reports</Link></li>
                <li><Link to="/logout" className="logout">🚪 Logout</Link></li>
            </ul>
        </nav>
    );
};

export default Sidebar;
