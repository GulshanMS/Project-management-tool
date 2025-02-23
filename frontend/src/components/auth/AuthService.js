export const getUser = () => {
    return JSON.parse(localStorage.getItem("user")) || null;
};

export const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
};

export const logout = () => {  // ✅ Ensure this is correctly exported
    localStorage.removeItem("user");
};
