import { useState } from "react";

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Title can not be blank");
      return;
    }
    onAdd(title.trim());
    setTitle("");
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="Add a new task ..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;
