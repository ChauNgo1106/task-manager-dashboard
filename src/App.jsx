import { use, useEffect, useState } from "react";
import mockData from "./data/tasks.json";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import "./App.css";
import SortingBar from "./components/SortingBar";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [dateSortingAsc, setDateSortingAsc] = useState(false);

  useEffect(() => {
    setTasks(sortTasksByDate(mockData));
  }, []);

  const addTask = (title, dueDate) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
      dueDate: dueDate
        ? new Date(dueDate).toISOString()
        : new Date().toISOString(),
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

  const sortTasksByDate = (tasks, ascending = true) => {
    return [...tasks].sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return ascending ? dateA - dateB : dateB - dateA;
    });
  };

  const handleSorting = () => {
    setDateSortingAsc((dateSortingAsc) => !dateSortingAsc);
    setTasks((tasks) => sortTasksByDate(tasks, dateSortingAsc));
  };
  return (
    <div className="container">
      <h1>Task Manager Dashboard</h1>
      <TaskForm onAdd={addTask} />
      <SearchBar onSearch={setSearchTerm} />
      <SortingBar handleSorting={handleSorting} />
      <TaskList tasks={filteredTasks} onToggle={handleOnToggle} />
      <FilterBar currentfilter={filter} onFilterChange={setFilter} />
    </div>
  );
};
export default App;
