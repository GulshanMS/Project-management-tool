export function checkUpcomingDeadlines(tasks = []) {  // ✅ Default to empty array
    if (!Array.isArray(tasks)) return; // ✅ Prevent undefined errors
    
    tasks.forEach(task => {
      if (task.deadline && new Date(task.deadline) < new Date()) {
        console.log(`⚠️ Deadline missed for: ${task.title}`);
      }
    });
  }
  