const previousTasks = {
    Development: ["Fix bugs", "Optimize database", "Improve UI", "Deploy app"],
    Design: ["Create wireframes", "Design homepage", "Update branding"],
    Marketing: ["SEO optimization", "Social media campaign", "Email marketing"]
  };
  
  export function generateSuggestedTasks(category) {
    const suggestions = previousTasks[category] || ["General task"];
    
    return suggestions.map(task => ({
      id: Math.random().toString(36).substr(2, 9),
      title: task,
      priority: Math.random() < 0.5 ? "High" : "Medium",
      category
    }));
  }
  