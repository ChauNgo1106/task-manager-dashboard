function TaskItem({ task }) {
  return (
    <div>
      <li>
        {task.title} {task.status ? "Complete" : "Incomplete"} {task.createdAt}
      </li>
    </div>
  );
}
export default TaskItem;
