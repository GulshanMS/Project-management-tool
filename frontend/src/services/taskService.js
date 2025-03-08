export const createTask = async (taskData) => {
    const response = await fetch("http://localhost:5000/api/tasks/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("user")?.token}`
        },
        body: JSON.stringify(taskData)
    });
    return response.json();
};

export const getTasks = async () => {
    const response = await fetch("http://localhost:5000/api/tasks", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("user")?.token}`
        }
    });
    return response.json();
};
