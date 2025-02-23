import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setUser } from "./AuthService";
import "./Auth.css"; // Import new styles

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Mock authentication (Replace with real API call)
        setUser({ email });
        navigate("/employee-dashboard"); // Redirect after login
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                <p>
                    Don't have an account?{" "}
                    <span className="link" onClick={() => navigate("/signup")}>Sign Up</span>
                </p>
            </div>
        </div>
    );
};

export default Login;
