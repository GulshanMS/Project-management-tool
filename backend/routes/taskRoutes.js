const express = require("express");
const Task = require("../models/Task");
const router = express.Router();

// ✅ Get tasks by project ID
router.get("/", async (req, res) => {
    try {
        const { projectId } = req.query;
        if (projectId) {
            const tasks = await Task.find({ projectId });
            return res.json(tasks);
        }
        // If no projectId is provided, return all tasks
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ✅ Create a new task
router.post("/", async (req, res) => {
    const { title, description, priority, deadline, projectId } = req.body;

    if (!projectId) {
        return res.status(400).json({ message: "Project ID is required" });
    }

    const newTask = new Task({ 
        title, 
        description, 
        priority, 
        deadline, 
        projectId, 
        status: "To Do" // Default status when creating a task
    });

    try {
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// ✅ Update task status
router.put("/:id/status", async (req, res) => {
    try {
        const { status } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id, 
            { status }, 
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ✅ Get task statistics (For Reports & Analytics)
router.get("/stats", async (req, res) => {
    try {
        const completed = await Task.countDocuments({ status: "Completed" });
        const inProgress = await Task.countDocuments({ status: "In Progress" });
        const toDo = await Task.countDocuments({ status: "To Do" });

        res.json({ completed, inProgress, toDo });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ✅ AI Task Recommendations (Basic static recommendations for now)
router.get("/recommendations", async (req, res) => {
    try {
        const recommendations = [
            "Assign high-priority tasks first",
            "Balance workload among employees",
            "Assign tasks based on past performance"
        ];
        res.json(recommendations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ✅ List All Tasks (Including those without Project ID)
router.get("/all", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ✅ Update Task Status using PATCH
router.patch("/:id", async (req, res) => {
    try {
        const { status } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id, 
            { status }, 
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
