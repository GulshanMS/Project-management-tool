import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
            <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/tasks">Tasks</Link></li>
                <li><Link to="/reports">Reports</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
