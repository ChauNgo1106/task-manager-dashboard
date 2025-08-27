import { useState } from "react";
import "../styles/TaskForm.css";

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState(false);

  const handleOnSubmit = (e) => {
    setError((e) => false);
    e.preventDefault();
    if (!title.trim()) {
      setError((e) => true);
      return;
    }
    onAdd(title.trim(), dueDate);
    setTitle("");
    setDueDate("");
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
        {error && <p style={{ color: "red" }}>Please enter your title</p>}
        <input
          type="text"
          placeholder="Due date"
          value={dueDate}
          onFocus={(e) => (e.target.type = "date")}
          onChange={(e) => {
            setDueDate(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TaskForm;
