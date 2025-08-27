import TaskItem from "./TaskItem";
import "../styles/TaskList.css";
function TaskList({ tasks, onToggle }) {
  return (
    <ul>
      {tasks.map((task) => {
        return <TaskItem task={task} key={task.id} onToggle={onToggle} />;
      })}
    </ul>
  );
}

export default TaskList;
