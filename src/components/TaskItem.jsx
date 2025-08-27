import "../styles/TaskItem.css";
function TaskItem({ task, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.title}{" "}
      </span>
      <span>
        <small> Created: {new Date(task.createdAt).toLocaleDateString()}</small>
      </span>
      <span>
        <small> Due: {new Date(task.dueDate).toLocaleDateString()}</small>
      </span>
    </li>
  );
}
export default TaskItem;
