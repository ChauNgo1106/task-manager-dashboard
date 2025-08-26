function TaskItem({ task, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.status}
        onChange={() => onToggle(task.id)}
      />
      {task.title} {task.createdAt}
    </li>
  );
}
export default TaskItem;
