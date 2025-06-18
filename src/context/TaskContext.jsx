import { createContext, useState, useEffect } from "react";
import { loadTasks, saveTasks } from "../utils/localStorage";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(loadTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (text) =>
    setTasks([...tasks, { id: Date.now(), text, done: false }]);
  const toggleTask = (id) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  const removeTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};
