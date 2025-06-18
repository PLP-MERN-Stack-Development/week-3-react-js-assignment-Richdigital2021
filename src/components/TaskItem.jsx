import { useTasks } from "../hooks/useTasks";

const TaskItem = ({ task }) => {
  const { toggleTask, removeTask } = useTasks();

  return (
    <li className="bg-white p-3 rounded shadow flex justify-between items-center">
      <div
        className={`cursor-pointer ${
          task.done ? "line-through text-gray-500" : ""
        }`}
        onClick={() => toggleTask(task.id)}
      >
        {task.text}
      </div>
      <button
        onClick={() => removeTask(task.id)}
        className="text-red-500 hover:text-red-700 font-bold"
      >
        ×
      </button>
    </li>
  );
};

export default TaskItem;
