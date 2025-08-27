import "../styles/SortingBar.css";

function SortingBar({ handleSorting, sortedKey, setSortedKey }) {
  return (
    <div>
      Sorting Criteria{" "}
      <select value={sortedKey} onChange={(e) => setSortedKey(e.target.value)}>
        <option value="createdAt">Creation Date</option>
        <option value="dueDate">Due Date</option>
      </select>
      <button onClick={handleSorting}>↑↓</button>
    </div>
  );
}

export default SortingBar;
