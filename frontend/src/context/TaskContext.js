import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/tasks")
      .then(res => setTasks(res.data))
      .catch(err => console.log(err));
  }, []);

  const addTask = async (task) => {
    const res = await axios.post("http://localhost:5000/tasks", task);
    setTasks([...tasks, res.data]);
  };

  const updateTask = async (id, status) => {
    const res = await axios.put(`http://localhost:5000/tasks/${id}`, { status });
    setTasks(tasks.map(task => task._id === id ? res.data : task));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};
