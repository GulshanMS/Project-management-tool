export const getUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};

export const login = async (email, password) => {
    try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Login failed");

        localStorage.setItem("user", JSON.stringify({ token: data.token, role: data.role }));
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const signup = async (name, email, password, role) => {
    try {
        const response = await fetch("http://localhost:5000/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password, role }),
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Signup failed");

        localStorage.setItem("user", JSON.stringify({ token: data.token, role: data.role }));
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const logout = () => {
    localStorage.removeItem("user");
};
