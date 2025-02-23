import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../components/auth/AuthService";  // ✅ Correct import

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <h2>Dashboard</h2>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
};

export default Navbar;
