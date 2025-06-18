const STORAGE_KEY = 'task_manager_tasks';

export const loadTasks = () => {
  const tasks = localStorage.getItem(STORAGE_KEY);
  return tasks ? JSON.parse(tasks) : [];
};

export const saveTasks = (tasks) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};
