import { useState } from "react";
import { generateSuggestedTasks } from "../../utils/aiTaskSuggestions";
import "./AIRecommendations.css";

function AIRecommendations({ category, addTask }) {
  const [suggestedTasks, setSuggestedTasks] = useState([]);

  const fetchSuggestions = () => {
    const tasks = generateSuggestedTasks(category);
    setSuggestedTasks(tasks);
  };

  return (
    <div className="ai-recommendations">
      <h3>AI Task Suggestions</h3>
      <button onClick={fetchSuggestions} className="fetch-btn">Get Suggestions</button>
      
      <ul>
        {suggestedTasks.map(task => (
          <li key={task.id} className={`suggestion ${task.priority.toLowerCase()}`}>
            {task.title} - <strong>{task.priority}</strong>
            <button onClick={() => addTask(task)} className="add-btn">Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AIRecommendations;
