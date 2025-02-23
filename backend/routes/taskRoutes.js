const express = require("express");
const { createTask, getTasks, getEmployeeTasks, updateTaskStatus } = require("../controllers/taskController");

const router = express.Router();

router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getEmployeeTasks);
router.put("/:id", updateTaskStatus);

module.exports = router;
