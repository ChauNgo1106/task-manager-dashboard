import { useState } from "react";
import "../styles/TaskForm.css";
function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);

  const handleOnSubmit = (e) => {
    setError((e) => false);
    e.preventDefault();
    if (!title.trim()) {
      setError((e) => true);
      return;
    }
    onAdd(title.trim());
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Add a new task ..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {error && <p style={{ color: "red" }}>Please enter your title</p>}
    </div>
  );
}

export default TaskForm;
