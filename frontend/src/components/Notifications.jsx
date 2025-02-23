import { useEffect, useState } from "react";
import { checkUpcomingDeadlines } from "../utils/deadlineChecker";
import "./Notifications.css";

function Notifications({ tasks }) {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const updateAlerts = () => {
      setAlerts(checkUpcomingDeadlines(tasks));
    };

    updateAlerts();
    const interval = setInterval(updateAlerts, 30000); // Check every 30 sec

    return () => clearInterval(interval);
  }, [tasks]);

  return (
    <div className="notifications">
      {alerts.length > 0 && (
        <div className="alert-box">
          {alerts.map((task, index) => (
            <p key={index} className={task.status === "Overdue" ? "overdue" : "upcoming"}>
              ⏳ {task.title} is {task.status}!
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Notifications;
