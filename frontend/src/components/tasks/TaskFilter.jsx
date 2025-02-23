import "./TaskFilter.css";

function TaskFilter({ setFilterStatus, setFilterCategory, setFilterPriority }) {
  return (
    <div className="task-filter">
      <select onChange={(e) => setFilterStatus(e.target.value)}>
        <option value="All">All Status</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <select onChange={(e) => setFilterCategory(e.target.value)}>
        <option value="All">All Categories</option>
        <option value="Development">Development</option>
        <option value="Design">Design</option>
        <option value="Marketing">Marketing</option>
      </select>

      <select onChange={(e) => setFilterPriority(e.target.value)}>
        <option value="All">All Priorities</option>
        <option value="High">High Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="Low">Low Priority</option>
      </select>
    </div>
  );
}

export default TaskFilter;
