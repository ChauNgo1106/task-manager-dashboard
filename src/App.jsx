import { useEffect, useState } from "react";
import mockData from "./data/tasks.json";
import TaskList from "./components/TaskList";
const App = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(mockData);
  }, []);
  return (
    <div>
      <h1>Task Manager Dashboard</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};
export default App;
