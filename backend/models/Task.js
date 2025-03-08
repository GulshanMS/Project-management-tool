const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    priority: { type: String, enum: ["High", "Medium", "Low"], default: "Medium" },
    deadline: { type: Date, required: true },
    projectId: { type: String, required: true },
    status: { type: String, enum: ["To Do", "In Progress", "Completed"], default: "To Do" } // Added status
});

module.exports = mongoose.model("Task", TaskSchema);
