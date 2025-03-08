import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./AuthService";
import "./Auth.css"; // Import styles

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const user = await login(email, password);
            navigate(user.role === "manager" ? "/manager-dashboard" : "/employee-dashboard");
        } catch (error) {
            alert(error.message);
        }
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
                        autoComplete="current-password"
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
