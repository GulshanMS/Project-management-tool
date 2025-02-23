const Task = require("../models/Task");

// Create Task
exports.createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "Failed to create task" });
  }
};

// Get All Tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate("assignedTo", "name");
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
};

// Get Employee Tasks
exports.getEmployeeTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ assignedTo: req.params.id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch employee tasks" });
  }
};

// Update Task Status
exports.updateTaskStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const task = await Task.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: "Failed to update task status" });
  }
};
