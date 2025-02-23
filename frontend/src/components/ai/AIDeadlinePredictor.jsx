import { useState, useEffect } from "react";
import { predictDeadline } from "../../utils/aiDeadlinePredictor";
import "./AIDeadlinePredictor.css";

function AIDeadlinePredictor({ category, priority, setDeadline }) {
  const [predictedDays, setPredictedDays] = useState(3);

  useEffect(() => {
    const days = predictDeadline(category, priority);
    setPredictedDays(days);
    const deadlineDate = new Date();
    deadlineDate.setDate(deadlineDate.getDate() + days);
    setDeadline(deadlineDate.toISOString().split("T")[0]); // Format: YYYY-MM-DD
  }, [category, priority, setDeadline]);

  return (
    <div className="ai-deadline">
      <p>⚡ AI Predicted Deadline: {predictedDays} days</p>
    </div>
  );
}

export default AIDeadlinePredictor;
