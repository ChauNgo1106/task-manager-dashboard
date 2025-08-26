function TaskItem({ task, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.status}
        onChange={() => onToggle(task.id)}
      />
      <span style={{ textDecoration: task.status ? "line-through" : "none" }}>
        {task.title}
      </span>
      {task.createdAt}
    </li>
  );
}
export default TaskItem;
