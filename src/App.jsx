import { useEffect, useState } from "react";
import mockData from "./data/tasks.json";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setTasks(mockData);
  }, []);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks([newTask, ...tasks]);
  };

  const handleOnToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "completed" && task.completed) ||
      (filter === "incompleted" && !task.completed);
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      <h1>Task Manager Dashboard</h1>
      <TaskForm onAdd={addTask} />
      <SearchBar onSearch={setSearchTerm} />
      <FilterBar currentfilter={filter} onFilterChange={setFilter} />
      <TaskList tasks={filteredTasks} onToggle={handleOnToggle} />
    </div>
  );
};
export default App;
