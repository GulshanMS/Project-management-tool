const Task = require("../models/Task");

// Create Task
exports.createTask = async (req, res) => {
    try {
        const { title, description, priority, deadline, projectId } = req.body;
        const task = new Task({ title, description, priority, deadline, projectId });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: "Error creating task" });
    }
};

// Get Tasks
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error fetching tasks" });
    }
};
