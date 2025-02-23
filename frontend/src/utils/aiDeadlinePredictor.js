const taskHistory = [
    { category: "Development", priority: "High", days: 5 },
    { category: "Development", priority: "Medium", days: 3 },
    { category: "Development", priority: "Low", days: 2 },
    { category: "Design", priority: "High", days: 4 },
    { category: "Design", priority: "Medium", days: 3 },
    { category: "Design", priority: "Low", days: 1 },
    { category: "Marketing", priority: "High", days: 6 },
    { category: "Marketing", priority: "Medium", days: 4 },
    { category: "Marketing", priority: "Low", days: 2 }
  ];
  
  export function predictDeadline(category, priority) {
    const match = taskHistory.find(t => t.category === category && t.priority === priority);
    return match ? match.days : 3; // Default 3 days if no match found
  }
  