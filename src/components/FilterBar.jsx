function FilterBar({ currentFilter, onFilterChange }) {
  const filters = ["all", "completed", "incompleted"];
  return (
    <div>
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onFilterChange(f)}
          style={{ fontWeight: currentFilter === f ? "bold" : "normal" }}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
