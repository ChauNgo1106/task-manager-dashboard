import { useEffect, useState } from "react";
import mockData from "./data/tasks.json";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
const App = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(mockData);
  }, []);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      status: false,
      createdAt: new Date().toISOString(),
    };
    setTasks([newTask, ...tasks]);
  };

  const handleOnToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };
  return (
    <div>
      <h1>Task Manager Dashboard</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={handleOnToggle} />
    </div>
  );
};
export default App;
