import { useState } from "react";
import { useTasks } from "../hooks/useTasks";

const TaskForm = () => {
  const [text, setText] = useState("");
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        className="flex-1 p-2 border rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add
      </button>
    </form>
  );
};

export default TaskForm;
