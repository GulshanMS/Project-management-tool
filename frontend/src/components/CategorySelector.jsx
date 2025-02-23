import "./CategorySelector.css";

function CategorySelector({ setCategory }) {
  return (
    <select onChange={(e) => setCategory(e.target.value)}>
      <option value="Development">Development</option>
      <option value="Design">Design</option>
      <option value="Testing">Testing</option>
    </select>
  );
}

export default CategorySelector;
