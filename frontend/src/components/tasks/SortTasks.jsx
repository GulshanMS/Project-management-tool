import "./SortTasks.css";

function SortTasks({ setSortOrder }) {
  return (
    <div className="sort-tasks">
      <label>Sort By Due Date: </label>
      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="Newest">Newest First</option>
        <option value="Oldest">Oldest First</option>
      </select>
    </div>
  );
}

export default SortTasks;
